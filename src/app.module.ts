import { RoutesModule } from './routes/routes.module';
import { Module } from '@nestjs/common';
import { OpenaiModule } from 'openai/openai.module';

@Module({
  imports: [RoutesModule, OpenaiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
