import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {createRoomDTO} from "./HotelDTO";
@Controller('hotel')
export class HotelController {
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
    return `Received request to add a new room with ${JSON.stringify(abody)} and with data ${abody.RoomID}`;
  }
  @Put('/rooms') //actually not, this is to modify a room info, provided a new room type and room ID
   modify(@Body('RoomID') RoomId, @Body('RoomType') RoomType,): string{
    return `Received request to modify room ${RoomId} to type ${RoomType} `;
  }
  @Delete('/rooms') // well 
   delRoom(@Body('RoomId') RoomId):String{
       return `received request to delete  room  ${RoomId} from records`
   }

   
}