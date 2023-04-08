import { ApiProperty } from '@nestjs/swagger';
import { Openai } from 'openai/entities/openai.entities';

export class CreateCompletionTripDto extends Openai {
  @ApiProperty()
  prompt: string;
  @ApiProperty({ default: 'text-davinci-003' })
  model = 'text-davinci-003';
  @ApiProperty({ required: false, default: 0 })
  temperature?: number = 0;
  @ApiProperty({ required: false, default: 7 })
  max_tokens?: number = 7;
  @ApiProperty({ required: false, default: 1 })
  top_p?: number = 1;
  @ApiProperty({ required: false, default: false })
  stream?: boolean = false;
  @ApiProperty({ required: false, default: '/n' })
  stop?: string = '/n';
  @ApiProperty({ required: false, default: 1 })
  n?: number = 1;
  @ApiProperty({ required: false, default: null })
  logprobs?: null | any;
}
