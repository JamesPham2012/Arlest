import{Module }from '@nestjs/common'
import { HotelModule } from './Hotel/HotelModule'

@Module({
    imports:[HotelModule],
    controllers:[]
})
export class AppModule{} 