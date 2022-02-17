import { NestFactory } from '@nestjs/core';
import { connect } from 'http2';
import { ConnectionManager, createConnection, createConnections, getConnectionManager } from 'typeorm';
import { LoggingInterceptor } from './common/Interceptor/LoggingInterceptor';
import { typeormConfig } from './Modules/Database/databaseConfig';
import { User } from './Modules/Database/Entities/User';
import { AppModule } from './Modules/mainModule';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor)

  await app.listen(3000);
}

bootstrap();
