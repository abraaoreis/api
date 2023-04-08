import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, User as UserModel } from 'prisma/prisma-client';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('user/:id')
  async getUserById(@Param('id') id: number): Promise<UserModel> {
    return this.userService.findOne({
      id,
    });
  }
  @Post('user')
  async createUser(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }
  @Put('user/:id')
  async updateUser(
    @Body() id: Prisma.UserWhereUniqueInput,
    data: UpdateUserDto,
  ) {
    return this.userService.update(id, data);
  }
  @Delete('user/:id')
  async deleteUser(@Param('id') id: number): Promise<UserModel> {
    return this.userService.delete({
      id,
    });
  }
}
