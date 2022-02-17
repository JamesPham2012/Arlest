import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { sleep } from 'src/common/boilerplateFunctions/sleep';
import { TestGuard } from 'src/common/Guards/TestGuard';
import {createRoomDTO} from "./HotelDTO";
import { HotelService } from './HotelService';



@Controller('hotel')
@UseGuards(new TestGuard)
export class HotelController {
  constructor(private service:HotelService){}
  @Get('/')
  greeting(): string {
    return 'Hello, welcome to hotel management site';
  }

  @Get('/rooms') //actually not, this is to return a list of all rooms in the hotel and their info
  async getAllRoom() {
    return 'well prolly no rooms yet, havent got database or seeds yet bro'  ;
  }

  @Post('/rooms') //actually not, this is to create a new room, provided a room type and room ID
  async addRoom(@Body() abody:createRoomDTO) {
    return "ok"
  }
  @Put('/rooms') //actually not, this is to modify a room info, provided a new room type and room ID
   modify(@Body('RoomID') RoomId, @Body('RoomType') RoomType): string{
    return `Received request to modify room ${RoomId} to type ${RoomType} `;
  }
  @Delete('/rooms') // well 
   delRoom(@Body('RoomId') RoomId):String{
       return `received request to delete  room  ${RoomId} from records`
   }   
}



