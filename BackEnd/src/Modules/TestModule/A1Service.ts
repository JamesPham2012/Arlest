import { Injectable, Post } from "@nestjs/common";
import { getConnection } from "typeorm";
import { HotelService } from "../Hotel/HotelService";
import { UserModule } from "../User/UserModule";
import { UserService } from "../User/UserService";

import {LooseObject} from '../../common/commonInterfaces'
import { UserSeedFactory } from "../Database/Seed/CustomSeeder/UserSeedFactory";
import { CustomeSeederScript1 } from "../Database/Seed/CustomSeeder/CustomeSeederScript1";
import { warn } from "console";



@Injectable()
export class A1Service{
    constructor(private userService :UserService, private hotelService: HotelService){}
    async clearDB() {
        const entities = getConnection().entityMetadatas;
        try{
            for (const entity of entities) {
                console.log("clearing "+entity.name)
                const repository =  getConnection().getRepository(entity.name);
                await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
            }
        }
        catch (err){
            console.log(err.message)
        }
        return "cleared database"
      }
    async massGen(){
        var seedFactory=new CustomeSeederScript1()
        var userSeeds=seedFactory.createUserSeed()
        for (const seed of userSeeds){
            try{
                await this.userService.addUser(seed)
            }
            catch (err){
                console.log(err.message)
            }
           
        }
    }
    
}