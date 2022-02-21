import { UserSeedFactory } from "./UserSeedFactory";


export class CustomeSeederScript1{
    userFac:UserSeedFactory = new UserSeedFactory()
   
    constructor(){
    };
    
    createUserSeed(){
        return this.userFac.seed()
    }

    createRoomTypeSeed(){
        
    }
}

