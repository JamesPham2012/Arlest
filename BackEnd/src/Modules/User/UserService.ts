import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { BookingOrder } from '../Database/Entities/BookingOrder';
import { Room } from '../Database/Entities/Room';
import { User } from '../Database/Entities/User';


@Injectable()
export class UserService{
    async getAllUser() {
        var query = await getConnection().getRepository(User).createQueryBuilder('user').getMany()
        console.log(query,typeof(query))
        return query    }
    async addUser(dummy_body=null) {
        if (!dummy_body){
            dummy_body={
                "firstName":"John",
                "lastName":"Smith",
                "passport":"772016319273"
            }
        }
        try {
            var query=  getConnection().createQueryBuilder().insert().into(User).values(
                { firstName: `${dummy_body.firstName}`,
                  lastName: `${dummy_body.lastName}`,
                  passport: `${dummy_body.passport}`}
            ).execute()
        }
        catch (err){
            return err.message 
        }
        return query
    }
    async delUser() {
        var dummy_body={
            "UserID":"1"
        }
        var query = await getConnection().createQueryBuilder().delete().from(User).where(`UserID=${dummy_body.UserID}`).execute()
        return query.affected
    }
    async modifyUser() {
        var dummy_body={
            "UserID":"12112",
            "firstName": "Erm",
            "lastName":"Dunno",
        }
        try {
            var query= await getConnection().createQueryBuilder().update(User).set(
                {
                    firstName:`${dummy_body.firstName}`,
                    lastName:`${dummy_body.lastName}`,
                }
            ).where(`UserID=${dummy_body.UserID}`)
            .execute()
        }
        catch(err){
            return err.message
        }
        return query.affected
    }

    async bookRoom() {
        var dummy_body={
            "UserID":"4",
            "RoomID":"3"
        }
        try{
            var query = getConnection().createQueryBuilder().insert().into(BookingOrder).values({
                Room :()=> `${parseInt(dummy_body.RoomID)}`,
                User :()=>`${parseInt(dummy_body.UserID)}`
            })
        }
        catch(err){
            console.log(err.message)
            return err.message
        }
        return query

      }
}