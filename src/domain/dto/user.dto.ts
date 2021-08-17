import {PickType} from "@nestjs/swagger";
import {User} from "../entities/user.entity";

//
export class SignupRequestDto extends PickType(User,['email', 'password', 'name', 'phoneNumber']){}
