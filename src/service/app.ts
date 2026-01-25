import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  async getIndex() {
    return "hello world";
  }
}
