import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
