import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_FILTER, APP_INTERCEPTOR, Reflector} from '@nestjs/core';
import {HttpModule} from '@nestjs/axios';
import {AuthModule} from './auth/auth.module';
import AppController from './controller/app';
import AppService from './service/app';
import ResponseInterceptor from './interceptor/response';
import HttpExceptionFilter from './filter/exception';
import {MongooseModule} from "@nestjs/mongoose";
import {Connection} from "mongoose";
import UserModule from "./module/user";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        // uri: 'mongodb://atlas-sql-697b4bb8ade6844e62c2aa5d-5tmbhq.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin',
        uri: 'mongodb://i_db_user:WRhzr3oX7HSthUzS@atlas-sql-697b4bb8ade6844e62c2aa5d-5tmbhq.a.query.mongodb.net/?ssl=true&authSource=admin&appName=atlas-sql-697b4bb8ade6844e62c2aa5d',
        // user: 'i_db_user',
        // pass: 'WRhzr3oX7HSthUzS',
        dbName: 'sample_mflix',
        retryWrites: true,
        directConnection: false, // 对于 Atlas，通常设为 false
        onConnectionCreate: (connection: Connection) => {
          connection.on('connected', () => console.log('connected'));
          connection.on('open', () => console.log('open'));
          connection.on('disconnected', () => console.log('disconnected'));
          connection.on('reconnected', () => console.log('reconnected'));
          connection.on('disconnecting', () => console.log('disconnecting'));
        }
      }),
      inject: [ConfigService]
    }),
    HttpModule,
    AuthModule,
    UserModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    Reflector,
    {
      provide: APP_INTERCEPTOR,
      useFactory: (reflector: Reflector) => new ResponseInterceptor(reflector),
      inject: [Reflector],
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }],
})
export class AppModule {}
