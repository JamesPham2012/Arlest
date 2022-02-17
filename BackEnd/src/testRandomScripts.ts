import { User } from "src/Modules/Database/Entities/User";
import { createConnection } from "typeorm";

createConnection({
        
    type: 'postgres',
    host: 'localhost',
    port: 2014,
    username: 'admin',
    password: 'admin',
    database: 'database_db_1',
    entities: [User],
    migrationsTableName:'migtab',
    migrations:['./Migrations/*.js'],
    cli: {
        "migrationsDir":'./Migrations'
    },
    synchronize:false
      
})
console.log("k")