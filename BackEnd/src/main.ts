import { NestFactory } from '@nestjs/core';
import { LoggingInterceptor } from './common/Interceptor/LoggingInterceptor';
import { AppModule } from './Modules/mainModule';
import "reflect-metadata";
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor)

  await app.listen(3000);
}

bootstrap();
