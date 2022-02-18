import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { TestGuard } from 'src/common/Guards/TestGuard';
import { UserService } from './UserService';


@Controller('users')
@UseGuards(new TestGuard)
export class UserController {
  constructor(private service:UserService){}
  
  @Get('/') 
  async getAllUser()  {
    return await this.service.getAllUser();
  }

  @Post('/') 
  async addUser() {
    return await this.service.addUser();
  }
    
  @Put('/') 
  async modify(){
    return await this.service.modifyUser();
  }

  @Delete('/') 
  async delUser(){
    return await this.service.delUser();
  }   
}





