import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities/user.entity';

// Types
import { UserInterface } from '../types/user.interface';
type Field = Partial<keyof UserInterface>;

export const GetUser = createParamDecorator(
  (field: Field, ctx: ExecutionContext): User | any => {
    const request = ctx.switchToHttp().getRequest();

    if (field) {
      if (request.user) {
        return request.user[field];
      }
    }

    return request.user;
  },
);
