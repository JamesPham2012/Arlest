import { Injectable, Post } from "@nestjs/common";
import { getConnection } from "typeorm";
import { HotelService } from "../Hotel/HotelService";
import { UserModule } from "../User/UserModule";
import { UserService } from "../User/UserService";



interface LooseObject {
    [key: string]: any
}




@Injectable()
export class A1Service{
    constructor(private userService :UserService, private hotelService: HotelService){}
    async clearDB() {
        const entities = getConnection().entityMetadatas;
        for (const entity of entities) {
            console.log(entity)
            const repository = await getConnection().getRepository(entity.name);
            await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
            console.log(entity)
        }
      }
    dropall(){

    }


    async massGen(){
        var UserNames=[["John","Smoth","12210027812"],["Leonardo","Wayne","39921777719"],["Henry","The Eighth","8762312731721"]]
        var RoomTypes=[20,30,40,50]
        var Rooms = [1,2,1,1,1,4,2]
        var BookingOrders= [[1,3],[2,4]]
        for (var i=0;i<UserNames.length;i++){
            var cur = UserNames[i]
            let dummy:LooseObject={};
            dummy.firstName=cur[0];
            dummy.lastName=cur[1];
            dummy.passport=cur[2];
            this.userService.addUser(dummy)
        }
    }
    
}