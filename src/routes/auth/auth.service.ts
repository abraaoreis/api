import { Injectable } from '@nestjs/common';
import { UserService } from 'routes/routes.service.export';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
}
