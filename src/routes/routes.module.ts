import { PrismaService } from 'prisma/prisma.service';
import { Module } from '@nestjs/common';
import {
  PlanController,
  TripController,
  UserController,
} from './routes.controller.export';
import { PlanService, TripService, UserService } from './routes.service.export';

@Module({
  imports: [],
  controllers: [UserController, TripController, PlanController],
  providers: [UserService, TripService, PlanService, PrismaService],
})
export class RoutesModule {}
