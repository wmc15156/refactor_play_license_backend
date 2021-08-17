import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LoggerMiddleware} from "../middleware/logger.middleware";

import {TypeOrmModule} from "@nestjs/typeorm";
import {typeormConfig} from "./config/typeorm.config";
import {UserModule} from "./infrastructure/modules/user/user.module";

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot(typeormConfig),
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
