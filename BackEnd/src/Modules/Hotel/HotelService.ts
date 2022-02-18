import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { getConnection } from 'typeorm';
import { Room } from '../Database/Entities/Room';
import { RoomTypeDetails } from '../Database/Entities/RoomTypeDetails';
import { getRoomDTO } from './HotelDTO';


@Injectable()
export class HotelService {
    async getAllRooms(){
        var res = []
        var query = await getConnection().getRepository(Room).createQueryBuilder('Room').innerJoinAndSelect("Room.RoomType","roomlist").getMany()
        console.log(query,typeof(query))
        return query
    } 
    async addRoom(){
        var dummy_body={
            "RoomType":"22"
        }
        try {
            var query= await getConnection().createQueryBuilder().insert().into(Room).values(
                { RoomType: ()=>`${parseInt(dummy_body.RoomType)}`},
            ).execute()
        }
        catch (err){
            return err.message
        }
        return query
    }

    async modRoom(){
        var dummy_body={
            "RoomID":"12112",
            "NewRoomType": "222"
        }
        try {
            var query= await getConnection().createQueryBuilder().update(Room).set(
                {RoomType:()=>`${parseInt(dummy_body.NewRoomType)}`}
            ).where(`RoomID=${dummy_body.RoomID}`)
            .execute()
        }
        catch(err){
            return err.message
        }
        return query
    }

    async delRoom(){
        var dummy_body={
            "RoomID":"6"
        }
        try {
            var query= await getConnection().createQueryBuilder().delete().from(Room)
            .where(`RoomID=${dummy_body.RoomID}`)
            .execute()
        }
        catch(err){
            return err.message
        }
        return query
    }
}