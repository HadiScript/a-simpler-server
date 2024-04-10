import { Injectable } from "@nestjs/common";
import { MessageRepo } from "./message.repo";



@Injectable()
export class MessageServices {

  constructor(public messageRepo: MessageRepo) { }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }


  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }



}