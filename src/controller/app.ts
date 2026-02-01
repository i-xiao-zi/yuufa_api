import {Controller, Get, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors} from '@nestjs/common';
import AppService from '../service/app';
import Json from '../decorator/json';
import {AuthGuard} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";
import Public from "../decorator/public";
import "multer";
import {FileInterceptor} from "@nestjs/platform-express";
import {memoryStorage} from "multer";
import githubStorage from "./github.storage";

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard('local'))
  @Json()
  @Get()
  async getIndex() {
    console.log('getIndex');
    return this.appService.getIndex();
  }
  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.appService.upload(file);
  }
}
