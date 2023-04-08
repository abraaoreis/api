import { Controller, Get } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PlanService } from './plan.service';

@Controller()
export class PlanController {
  constructor(private readonly planService: PlanService) {}
  @Get('plan/:tripId')
  async getPlanByTrip(id: Prisma.PlanWhereUniqueInput) {
    return this.planService.findOne(id);
  }
}
