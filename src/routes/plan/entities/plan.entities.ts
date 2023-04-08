import { Prisma } from '@prisma/client';

export class Plan implements Prisma.PlanUncheckedCreateInput {
  id?: number;
  tripId: number;
  startDate: string | Date;
  endDate: string | Date;
  destinations?: Prisma.DestinationUncheckedCreateNestedManyWithoutPlanInput;
}
