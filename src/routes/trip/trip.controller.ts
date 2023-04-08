import { CreateTripDto } from './dto/trip.dto';
import { TripService } from './trip.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Trip as TripModel } from '@prisma/client';

@Controller()
export class TripController {
  constructor(private tripService: TripService) {}
  @Get('trip/:id')
  async getTripById(@Param('id') id: number): Promise<TripModel | null> {
    return this.tripService.findOne({ id });
  }
  @Get('trips/:userId')
  async getTripsByUser(
    @Param('userId') userId: number,
  ): Promise<TripModel[] | null> {
    return this.tripService.findAll({
      where: {
        userId: userId,
      },
    });
  }
  @Post('trip/:userId')
  async createTrip(@Body() createTripDto: CreateTripDto): Promise<TripModel> {
    return this.tripService.create(createTripDto);
  }
}
