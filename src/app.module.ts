import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {APP_FILTER, APP_INTERCEPTOR, Reflector} from '@nestjs/core';
import {HttpModule} from '@nestjs/axios';
import path from "path";
import AppController from './controller/app';
import AppService from './service/app';
import ResponseInterceptor from './interceptor/response';
import HttpExceptionFilter from './filter/exception';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        HttpModule,
    ],
    controllers: [AppController],
    providers: [AppService, Reflector,
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
