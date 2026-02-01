import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {HttpModule} from '@nestjs/axios';
import AuthModule from './module/auth';
import AppController from './controller/app';
import AppService from './service/app';
import MysqlModule from "./module/mysql";
import ResponseModule from "./module/response";
import AuthController from "./controller/auth";
import AuthService from "./service/auth";
import SearchorController from "./controller/searchor";
import SearchorService from "./service/searchor";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    HttpModule,
    MysqlModule,
    AuthModule,
    ResponseModule,
  ],
  controllers: [
    AppController,
    AuthController,
    SearchorController
  ],
  providers: [
    AppService,
    AuthService,
    SearchorService,
  ],
})
export class AppModule {}
