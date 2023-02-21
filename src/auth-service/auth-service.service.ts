import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import dayjs, { ManipulateType } from 'dayjs';
import { JwtService } from '@nestjs/jwt';

// Models
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RefreshTokenDto } from './dto/refresh-token.dto';

// Types
export interface Token {
  access_token: string;
  refresh_token: string;
  expire_date: string;
}

type TokenResponse = Promise<Token | string>;
type UserId = string | number;

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async login(user: CreateUserDto): TokenResponse {
    const { phone_number, email, password } = user;

    if (phone_number) {
      return await this.loginByPhoneNumber(phone_number, password);
    } else if (email) {
      return await this.loginByEmail(email, password);
    }
  }

  async loginByPhoneNumber(
    phone_number: string,
    password: string,
  ): TokenResponse {
    const candidate = await this.userRepository.findOne({ phone_number });

    if (!candidate) {
      return `There is no user with phone number ${phone_number} in the system`;
    }

    return await this.loginByPassword(
      candidate.id,
      password,
      candidate.password,
    );
  }

  async loginByEmail(email: string, password: string): TokenResponse {
    const candidate = await this.userRepository.findOne({ email });

    if (!candidate) {
      return `There is no user with email ${email} in the system`;
    }

    return await this.loginByPassword(
      candidate.id,
      password,
      candidate.password,
    );
  }

  async loginByPassword(
    userId: UserId,
    inputPassword: string,
    userPassword: string,
  ): Promise<Token> {
    const isCorrectPassword: boolean = await bcrypt.compare(
      inputPassword,
      userPassword,
    );

    if (isCorrectPassword) {
      return this.generateToken(userId);
    } else {
      throw 'Incorrect password';
    }
  }

  generateToken(userId: UserId): Token {
    const expireValue: number = Number(
      this.configService.get<string>('auth.jwt_expire_time_value'),
    );
    const expireUnit: ManipulateType = this.configService.get<ManipulateType>(
      'auth.jwt_expire_time_type',
    );

    const expire_date = dayjs().add(expireValue, expireUnit).format();

    return {
      access_token: this.jwtService.sign({ user: userId }),
      refresh_token: this.jwtService.sign(
        { user: userId },
        {
          secret: this.configService.get<string>('auth.jwt_refresh_secret_key'),
          expiresIn: this.configService.get<string>(
            'auth.jwt_refresh_expire_time',
          ),
        },
      ),
      expire_date,
    };
  }

  async registration(user: CreateUserDto): Promise<string> {
    const { phone_number, email, password } = user;

    try {
      if (phone_number) {
        const candidate = await this.userRepository.findOne({ phone_number });

        if (candidate) {
          return `User with phone number ${phone_number} already exists`;
        }
      } else if (email) {
        const candidate = await this.userRepository.findOne({ email });

        if (candidate) {
          return `User with email ${email} already exists`;
        }
      }

      // Decode password
      const bcryptPassword: string = await bcrypt.hash(password, 7);

      // Create user
      const newUser = await this.userRepository.create(
        new CreateUserDto({
          phone_number,
          email,
          password: bcryptPassword,
        }),
      );

      await this.userRepository.save(newUser);

      return 'Succesful create new user';
    } catch (error: any) {
      console.log(error);

      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllUsers() {
    try {
      return await this.userRepository.find();
    } catch (e) {
      throw e;
    }
  }

  async getUserById(id: UserId) {
    try {
      const [user] = await this.userRepository.findByIds([id]);

      if (user) {
        return user;
      } else {
        return `User with id ${id} is undefined`;
      }
    } catch (e) {
      throw `User with id ${id} is undefined`;
    }
  }

  async refreshToken(body: RefreshTokenDto): TokenResponse {
    try {
      const decodeToken: any = await this.jwtService.verify(
        body.refresh_token,
        {
          secret: this.configService.get<string>('auth.jwt_refresh_secret_key'),
        },
      );

      if (decodeToken.user) {
        return this.generateToken(decodeToken.user);
      }

      throw new UnauthorizedException();
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async updateUserById(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.userRepository.update(id, updateUserDto);

      return `User with ${id} successful updated`;
    } catch (e) {
      throw `Failed update user with id: ${id}`;
    }
  }

  async deleteUserById(id: number) {
    try {
      await this.userRepository.delete(id);

      return `User with ${id} successful deleted`;
    } catch (e) {
      throw `Failed delete user with id: ${id}`;
    }
  }
}
