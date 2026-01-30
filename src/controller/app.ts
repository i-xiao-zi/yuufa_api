import {Controller, Get, UseGuards} from '@nestjs/common';
import AppService from '../service/app';
import { ResponseInterceptor } from '../decorator/response';
import {AuthGuard} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard('local'))
  @Get()
  async getIndex() {
    console.log('getIndex');
    return this.appService.getIndex();
  }
}
