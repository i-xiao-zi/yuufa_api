import { Injectable } from '@nestjs/common';
import UserService from "./user";

@Injectable()
export default class AppService {
  constructor(private readonly userService: UserService) {}
  async getIndex() {
    console.log('getIndex2');
    // const count = await this.userService.all();
    // console.log({count})
    // const res = await this.userService.find('59b99db9cfa9a34dcd7885c0');
    // console.log({res})
    // const user = await this.userService.create({
    //   name: "Hello world",
    //   email: "hello@world.com",
    //   password: "123456"
    // });
    this.userService.create({
      name: "Hello world",
      email: "hello@world.com",
      password: "123456"
    }).then(() => {
      console.log('save success');
    }).catch((err) => {
      console.log('save error', err);
    });
    // console.log(user);
    return "xxxxxxxxxxx";
    return "";
  }
}
