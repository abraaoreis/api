import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateCompletionTripDto } from './dto/openai.dto';
import { OpenaiService } from './openai.service';
@Controller('openai')
export class OpenaiController {
  constructor(private openaiService: OpenaiService) {}
  @Post()
  @ApiBody({ type: [CreateCompletionTripDto] })
  async createCompletionTripRequest(
    @Body() createCompletionTrip: CreateCompletionTripDto,
  ) {
    return await this.openaiService.createCompletion(createCompletionTrip);
  }
}
