import{Module }from '@nestjs/common'
import { DatabaseModule } from './Database/DatabaseModule'
import { HotelModule } from './Hotel/HotelModule'
import { A1Module } from './TestModule/A1Module'
import { UserModule } from './User/UserModule'

@Module({
    imports:[HotelModule,UserModule,DatabaseModule,A1Module],
    controllers:[]
})
export class AppModule{
} 