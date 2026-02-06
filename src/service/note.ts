import { Injectable } from '@nestjs/common';
import NoteContentModelService from "./note_content.model";
import NoteCategoryModelService from './note_category.model';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export default class NoteService {
  constructor(private readonly noteCategoryModelService: NoteCategoryModelService, private readonly noteContentModelService: NoteContentModelService) {}
  index() {
    return instanceToPlain(this.children(0));
  }
  private async children(parent_id: number) {
    const items = await this.noteCategoryModelService.allByParentId(parent_id);
    for (let item of items) {
      item.children = await this.children(item.id);
    }
    return items;
  }
}
