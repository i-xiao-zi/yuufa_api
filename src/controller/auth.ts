import {Controller, Request, Get, Post, UseGuards, Body} from '@nestjs/common';
import AppService from '../service/app';
import Public from "../decorator/public";
import AuthService from "../service/auth";
import { Register } from "../validator/auth";

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() data: Register) {
    return this.authService.login(data);
  }
  @Public()
  @Post('register')
    register(@Body() data: Register) {
    return this.authService.register(data);
  }
}
