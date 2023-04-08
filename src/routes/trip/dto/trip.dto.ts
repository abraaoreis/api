import { ApiProperty } from '@nestjs/swagger';
import { Trip } from '../entities/trip.entities';

export class CreateTripDto extends Trip {
  @ApiProperty()
  city: string;
  @ApiProperty({ required: false })
  state?: string;
  // city: string;
  // state?: string;
  // country: string;
  // numDays?: number;
  // budget?: number;
  // currency?: string;
  // startDate?: string | Date;
  // endDate?: string | Date;
  // createAt?: string | Date;
  // user: Prisma.UserCreateNestedOneWithoutTripsInput;
  // plans?: Prisma.PlanCreateNestedManyWithoutTripInput;
}
