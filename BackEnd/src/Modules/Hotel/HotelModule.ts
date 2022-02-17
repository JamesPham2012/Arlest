import{MiddlewareConsumer, Module, NestModule }from '@nestjs/common'
import { LoggerMiddleware1 } from 'src/common/Middleware/LoggerMiddleware1'
import { LoggerMiddleware2 } from 'src/common/Middleware/LoggerMiddleware2'
import { HotelController } from './HotelController'
import { HotelService } from './HotelService'

@Module({
    imports:[],
    controllers:[HotelController],
    providers:[HotelService]
})
export class HotelModule  implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware1,LoggerMiddleware2).forRoutes("hotel")
    }
} 