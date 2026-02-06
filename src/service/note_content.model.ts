import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import NoteContent from 'src/entity/note_content';
import {DeepPartial, Repository} from 'typeorm';

@Injectable()
export default class NoteContentModelService {
  constructor(@InjectRepository(NoteContent) private noteContentModel: Repository<NoteContent>) {}
  find(id: number) {
    return this.noteContentModel.findOneBy({id});
  }
  all() {
    return this.noteContentModel.find({
      // relations: ["parent"],
      // relations: ["contents"],
      relations: ["category"],
      order: {
        sort: "ASC",
        // parent: {
        //   sort: "ASC",
        // }
      },
    });
  }
}
