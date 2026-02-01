import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/entity/user';
import {ConfigModule, ConfigService} from "@nestjs/config";
import fs from "fs";
import path from "path";
import SearchorModelService from "../service/searchor.model";
import UserModelService from '../service/user.model';
import Searchor from "../entity/searchor";
import SearchorType from "../entity/searchor_type";
import SearchorTypeModelService from "../service/searchor_type.model";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST'),
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USER'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        database: configService.get<string>('MYSQL_DATABASE'),
        entities: [__dirname + '../entity/*.ts'],
        autoLoadEntities: true,
        logging: true,
        logger: "advanced-console",
        ssl: {
          ca: fs.readFileSync(path.join(__dirname, '../../mysql.pem')),
        },
        // synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, Searchor, SearchorType]),
  ],
  providers: [UserModelService, SearchorModelService, SearchorTypeModelService],
  exports: [UserModelService, SearchorModelService, SearchorTypeModelService],
})
export default class MysqlModule {}