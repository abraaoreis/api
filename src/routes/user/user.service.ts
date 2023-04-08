import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOne(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: id,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(
    id: Prisma.UserWhereUniqueInput,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.prisma.user.update({
      data: updateUserDto,
      where: id,
    });
  }

  async delete(id: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where: id,
    });
  }
}
