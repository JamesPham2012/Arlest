import{Module }from '@nestjs/common'
import { HotelController } from './HotelController'
import { HotelService } from './HotelService'

@Module({
    imports:[],
    controllers:[HotelController],
    providers:[HotelService]
})
export class HotelModule{} 