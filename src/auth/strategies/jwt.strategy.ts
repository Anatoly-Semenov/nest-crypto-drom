import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../types/jwt-payload.interface';
import { User } from '../../user/entities/user.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // Todo: refactoring to .env
      secretOrKey: 'secret',
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.usersService.getUserById(payload.user);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
