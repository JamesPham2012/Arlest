import{Module }from '@nestjs/common'
import { DatabaseModule } from './Database/DatabaseModule'
import { HotelModule } from './Hotel/HotelModule'
import { UserModule } from './User/UserModule'

@Module({
    imports:[HotelModule,UserModule,DatabaseModule],
    controllers:[]
})
export class AppModule{
} 