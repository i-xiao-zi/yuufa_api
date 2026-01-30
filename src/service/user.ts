import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from "mongoose";
import {IUser, User, UserDocument} from "../schema/user";

@Injectable()
export default class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async find(id: string) {
    
    return this.userModel.findById(id).exec();
  }
  async all() {
    return await this.userModel.find().exec();
  }
  async create(data: IUser) {
    return await this.userModel.insertOne(data);
  }
}
