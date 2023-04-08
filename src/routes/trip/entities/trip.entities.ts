import { Prisma } from '@prisma/client';

export class Trip implements Prisma.TripUncheckedCreateInput {
  id?: number;
  userId: number;
  city: string;
  state?: string;
  country: string;
  numDays?: number;
  budget?: number;
  currency?: string;
  startDate?: string | Date;
  endDate?: string | Date;
  createAt?: string | Date;
  plans?: Prisma.PlanUncheckedCreateNestedManyWithoutTripInput;
}
