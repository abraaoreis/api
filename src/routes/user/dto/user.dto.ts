import { ApiProperty, PartialType } from '@nestjs/swagger';
import { User } from '../entities/user.entities';

export class CreateUserDto extends User {
  @ApiProperty({ default: 'anonymous' })
  username?: string = 'anonymous';
  @ApiProperty()
  email?: string;
  @ApiProperty()
  name?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
