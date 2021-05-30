import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
@Controller('cats')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
