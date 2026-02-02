import { Injectable } from '@nestjs/common';
import UserModelService from "./user.model";
// import { Octokit } from "@octokit/rest";
import {hash} from "typeorm/util/StringUtils";
import path from "path";
import {ConfigService} from "@nestjs/config";

@Injectable()
export default class AppService {
  // private repos: Octokit['rest']['repos'];
  constructor(private readonly configService: ConfigService, private readonly userModelService: UserModelService) {
    // this.repos = new Octokit({
    //   auth: this.configService.get<string>('GITHUB_TOKEN') || ''
    // }).rest.repos
  }
  async getIndex() {
    return this.userModelService.all();
  }

  async upload(file: Express.Multer.File) {
    // const filename = `${hash(file.buffer.toString())}${path.extname(file.originalname)}`
    // let sha = undefined
    // try {
    //   const {data} = await this.repos.getContent({
    //     owner: this.configService.get<string>('GITHUB_OWNER') || '',
    //     repo: this.configService.get<string>('GITHUB_REPO') || '',
    //     path: filename
    //   });
    //   sha = (data as any).sha;
    // } catch (e){}
    // const {data} = await this.repos.createOrUpdateFileContents({
    //   owner: this.configService.get<string>('GITHUB_OWNER') || '',
    //   repo: this.configService.get<string>('GITHUB_REPO') || '',
    //   path: filename,
    //   message: file.originalname,
    //   content: file.buffer.toString('base64'),
    //   sha,
    // })
    // return data?.content?.path;
  }
}
