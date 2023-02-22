import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user-service')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('users')
  findAll() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('users/:id')
  update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return this.userService.updateUserById(+id, UpdateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('users/:id')
  delete(@Param('id') id: string) {
    return this.userService.deleteUserById(+id);
  }
}
