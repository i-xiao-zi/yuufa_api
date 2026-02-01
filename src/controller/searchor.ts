import {Controller, Request, Get, Post, UseGuards, Body} from '@nestjs/common';
import AppService from '../service/app';
import Public from "../decorator/public";
import SearchorService from "../service/searchor";
import { Register } from "../validator/auth";

@Controller('searchor')
export default class SearchorController {
  constructor(private readonly searchorService: SearchorService) {}

  @Public()
  @Get()
  public index() {
    return this.searchorService.index();
  }
}
