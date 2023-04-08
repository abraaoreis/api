import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { CreateCompletionTripDto } from './dto/openai.dto';

@Injectable()
export class OpenaiService {
  private readonly openai: OpenAIApi;
  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createCompletion(data: CreateCompletionTripDto) {
    try {
      const response = await this.openai.createCompletion(data);
      return response.data;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
