import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth-service.service';
import { AuthServiceController } from './auth-service.controller';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || 'secret',
      signOptions: {
        expiresIn: process.env.JWT_EXPIRE_TIME || '15m',
      },
    }),
  ],
  exports: [AuthService],
  controllers: [AuthServiceController],
  providers: [AuthService, JwtStrategy],
})
export class AuthServiceModule {}
