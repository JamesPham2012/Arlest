import { LooseObject } from "src/common/commonInterfaces"





export class RoomTypeSeedFactory{
    private pricing = [122,422,101,492,691,500,260]
    constructor(){}

    seed(){
        var objectArr=[]
        for (const price of this.pricing){
            var object:LooseObject={}
            object.pricing = price;
            object.Description ="Default description"
            objectArr.push(object)
        }
        return objectArr
    }
}