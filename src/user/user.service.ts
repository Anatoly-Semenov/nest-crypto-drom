import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateUserDto, CreateUserDto } from './dto/';
import { User } from './entities/user.entity';
import { UserInterface } from './types/user.interface';

export type UserId = string | number;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (e) {
      throw new BadRequestException(`Failed to get users list`);
    }
  }

  async getMe(user): Promise<User[] | any> {
    if (user) {
      return user;
    } else {
      throw new BadRequestException('Failed to get your user');
    }
  }

  async getUser(fields: Partial<UserInterface>): Promise<User> {
    try {
      return await this.userRepository.findOne(fields);
    } catch (error) {
      throw new BadRequestException(`User is undefined`);
    }
  }

  async getUserById(id: UserId): Promise<User> {
    try {
      const [user] = await this.userRepository.findByIds([id]);

      if (user) {
        return user;
      } else {
        throw new BadRequestException(`User with id ${id} is undefined`);
      }
    } catch (e) {
      throw new BadRequestException(`User with id ${id} is undefined`);
    }
  }

  async createUser(user: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.userRepository.create(user);

      return await this.userRepository.save(newUser);
    } catch (e) {
      throw new BadRequestException('Failed to create new user');
    }
  }

  async updateUserById(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.userRepository.update(id, updateUserDto);

      throw new BadRequestException(`Failed update user with id: ${id}`);
    } catch (e) {
      throw new BadRequestException(`Failed update user with id: ${id}`);
    }
  }

  async deleteUserById(id: number) {
    try {
      await this.userRepository.delete(id);

      throw new BadRequestException(`Failed delete user with id: ${id}`);
    } catch (e) {
      throw new BadRequestException(`Failed delete user with id: ${id}`);
    }
  }
}
