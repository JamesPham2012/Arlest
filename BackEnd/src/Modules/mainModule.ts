import{Module }from '@nestjs/common'
import { DatabaseModule } from './Database/DatabaseModule'
import { HotelModule } from './Hotel/HotelModule'

@Module({
    imports:[HotelModule,DatabaseModule],
    controllers:[]
})
export class AppModule{
} 