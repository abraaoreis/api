import { CreateTripDto } from './dto/trip.dto';
import { Injectable } from '@nestjs/common';
import { Prisma, Trip } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}
  async findOne(
    tripWhereUniqueInput: Prisma.TripWhereUniqueInput,
  ): Promise<Trip | null> {
    return this.prisma.trip.findUnique({
      where: tripWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TripWhereUniqueInput;
    where?: Prisma.TripWhereInput;
    orderBy?: Prisma.TripOrderByWithRelationInput;
  }): Promise<Trip[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.trip.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async create(data: CreateTripDto) {
    return this.prisma.trip.create({
      data,
    });
  }
}
