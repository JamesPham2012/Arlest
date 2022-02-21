import { Controller, Delete, Post } from "@nestjs/common";
import { A1Service } from "./A1Service";








@Controller("seed")
export class A1Controller{
    constructor(private service:A1Service){}
    @Post("/")
    async massGenCaller(){
        return this.service.massGen()
    }
    @Delete("/")
    async reset(){
        return this.service.clearDB()
    }
}