import {TypeOrmModuleOptions} from "@nestjs/typeorm";

console.log(process.env.DATABASE_HOST, 'here');

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'refactor_play_license',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    migrations: [__dirname + '/src/migrations/*.ts'],
    cli: { migrationsDir: 'src/migrations' },
    autoLoadEntities: true,
    charset: 'utf8mb4',
    logging: true,
    keepConnectionAlive: true,
}
