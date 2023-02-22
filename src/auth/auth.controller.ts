import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth-service')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() CreateUserDto: CreateUserDto) {
    return this.authService.login(CreateUserDto);
  }

  @Post('registration')
  registration(@Body() user: CreateUserDto) {
    return this.authService.registration(user);
  }

  @Post('refresh-token')
  refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refreshToken(body);
  }

  @Get('users')
  findAll() {
    return this.authService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.authService.getUserById(+id);
  }

  @Patch('users/:id')
  update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return this.authService.updateUserById(+id, UpdateUserDto);
  }

  @Delete('users/:id')
  delete(@Param('id') id: string) {
    return this.authService.deleteUserById(+id);
  }
}
