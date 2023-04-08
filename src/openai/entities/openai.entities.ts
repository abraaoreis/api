import { CreateCompletionRequest } from 'openai';

export class Openai implements CreateCompletionRequest {
  model: string;
  prompt?: string;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  n?: number;
  stream?: boolean;
  logprobs?: any;
  stop?: string;
}
