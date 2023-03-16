import { Controller, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

import { CreateUserDto } from '../user/dto/';
import { RefreshTokenDto, ResponseTokenDto } from './dto';

@Controller('auth-service')
@ApiTags('auth-service')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'Login by phone_number of email.',
    type: ResponseTokenDto,
  })
  login(@Body() CreateUserDto: CreateUserDto) {
    return this.authService.login(CreateUserDto);
  }

  @Post('registration')
  @ApiResponse({
    status: 200,
    description: 'registration new account by phone_number of email..',
    type: ResponseTokenDto,
  })
  registration(@Body() user: CreateUserDto) {
    return this.authService.registration(user);
  }

  @Post('refresh-token')
  @ApiResponse({
    status: 200,
    description: 'Refresh token.',
    type: ResponseTokenDto,
  })
  refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refreshToken(body);
  }
}
