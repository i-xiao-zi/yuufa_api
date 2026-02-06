import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import NoteCategory from '../entity/note_category';
import {DeepPartial, Repository} from 'typeorm';

@Injectable()
export default class NoteCategoryModelService {
  constructor(@InjectRepository(NoteCategory) private noteCategoryModel: Repository<NoteCategory>) {}
  find(id: number) {
    return this.noteCategoryModel.findOneBy({id});
  }
  all() {
    return this.noteCategoryModel.find({
      // relations: ["parent"],
      // relations: ["contents"],
      relations: ["children", "contents"],
      order: {
        sort: "ASC",
        children: {
          sort: "ASC",
        },
        contents: {
          sort: "ASC",
        }
      },
      select: {
        id: true,
        parent_id: true,
        name: true,
        sort: true,
        children: {
          id: true,
          name: true,
          sort: true,
        },
        contents: {
          id: true,
          title: true,
          sort: true,
        }
      }
    });
  }
}
