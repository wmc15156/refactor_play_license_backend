import { Module } from '@nestjs/common';
import {UserController} from "../../../app/controllers/user.controller";
import {UserService} from "../../../domain/services/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../../domain/entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        User,
    ])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
