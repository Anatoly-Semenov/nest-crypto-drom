import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

import { UpdateUserDto, ResponseUserDto } from './dto';
import { GetUser } from './decorators/get-user.decorator';

@Controller('user-service')
@ApiTags('user-service')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @ApiResponse({
    status: 200,
    description: 'Get users list.',
    type: ResponseUserDto,
    isArray: true,
  })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userService.getAllUsers();
  }

  @Get('users/me')
  @ApiResponse({
    status: 200,
    description: 'Get my user data.',
    type: ResponseUserDto,
  })
  @UseGuards(JwtAuthGuard)
  findMe(@GetUser() user) {
    return this.userService.getMe(user);
  }

  @Get('users/:id')
  @ApiResponse({
    status: 200,
    description: 'Get detail user data.',
    type: ResponseUserDto,
  })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Patch('users/:id')
  @ApiResponse({
    status: 200,
    description: 'Update user data by id.',
    type: ResponseUserDto,
  })
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return this.userService.updateUserById(+id, UpdateUserDto);
  }

  @Delete('users/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete user.',
    type: ResponseUserDto,
  })
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this.userService.deleteUserById(+id);
  }
}
