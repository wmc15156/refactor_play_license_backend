import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    userId: number;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Column({
        unique: true,
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    password: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    phoneNumber: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
