import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { Room } from '../Database/Entities/Room';
import { User } from '../Database/Entities/User';


@Injectable()
export class UserService{
    async getAllUser() {
        var query = await getConnection().getRepository(User).createQueryBuilder('user').getMany()
        console.log(query,typeof(query))
        return query    }
    async addUser() {
        var dummy_body={
            "firstName":"John",
            "lastName":"Smith",
            "passport":"772016319273"
        }
        try {
            var query= await getConnection().createQueryBuilder().insert().into(User).values(
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
        return "ok done "
    }
    async modifyUser() {
        throw new Error('Method not implemented.');
    }
}