import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  username?: string;
  email?: string;
  name?: string;
  createdAt?: string | Date;
  updatedAt: string | Date;
  lastLogin: string | Date;
  address?: Prisma.AddressUncheckedCreateNestedOneWithoutUserInput;
  trips?: Prisma.TripUncheckedCreateNestedManyWithoutUserInput;
}
