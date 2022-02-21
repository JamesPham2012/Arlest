import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { HotelService } from "../Hotel/HotelService";
import { UserModule } from "../User/UserModule";
import { UserService } from "../User/UserService";
import { A1Controller } from "./A1Controller";
import { A1Service } from "./A1Service";


@Module({
    imports:[],
    controllers:[A1Controller],
    providers:[A1Service,UserService,HotelService]})
export class A1Module implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}