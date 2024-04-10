import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-mesasge.dto';
import { MessageServices } from './message.service';



@Controller('messages')
export class MessagesController {

  constructor(public messageService: MessageServices) { }


  @Get()
  listMessages() {
    return this.messageService.findAll();
  }



  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);

  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const msg = await this.messageService.findOne(id);
    if (!msg) {
      throw new NotFoundException("Not Found:(")
    }

    return msg
  }


}
