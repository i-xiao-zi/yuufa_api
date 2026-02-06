import {Controller, Get, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors} from '@nestjs/common';
import Public from "../decorator/public";
import "multer";
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import NoteService from '../service/note';

@ApiTags("笔记")
@Controller("note")
export default class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @ApiOperation({summary: "获取笔记列表"})
  @Get()
  @Public()
  async index() {
    return this.noteService.index();
  }
}
