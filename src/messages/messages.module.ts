import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageServices } from './message.service';
import { MessageRepo } from './message.repo';



@Module({
  controllers: [MessagesController],
  providers: [MessageServices, MessageRepo]

})
export class MessagesModule { }
