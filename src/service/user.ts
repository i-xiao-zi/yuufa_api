import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserModelService {
  async getIndex() {
    return "hello world";
  }
}
