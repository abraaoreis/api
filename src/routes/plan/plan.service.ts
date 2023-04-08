import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Plan, Plan as PlanModel, Prisma } from '@prisma/client';
import { CreatePlanDto } from './dto/plan.dto';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(id: Prisma.PlanWhereUniqueInput): Promise<PlanModel | null> {
    return this.prisma.plan.findUnique({
      where: id,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlanWhereUniqueInput;
    where?: Prisma.PlanWhereInput;
    orderBy?: Prisma.PlanOrderByWithRelationInput;
  }): Promise<Plan[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.plan.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreatePlanDto): Promise<PlanModel | null> {
    return this.prisma.plan.create({
      data,
    });
  }
}
