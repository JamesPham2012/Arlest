import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerMiddleware1 } from "src/common/Middleware/LoggerMiddleware1";
import { LoggerMiddleware2 } from "src/common/Middleware/LoggerMiddleware2";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

@Module({
    imports:[],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule  implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware1,LoggerMiddleware2).forRoutes("users")
    }
} 