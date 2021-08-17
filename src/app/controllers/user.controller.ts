import {Body, Controller, Logger, Post} from '@nestjs/common';

import {ApiAcceptedResponse, ApiOperation, ApiResponse} from "@nestjs/swagger";
import {SignupRequestDto} from "../../domain/dto/user.dto";
import {UserService} from "../../domain/services/user.service";


@Controller('user')
export class UserController {
    private readonly logger = new Logger(UserController.name);

    constructor(private readonly userService: UserService) {}

    @Post('/')
    @ApiOperation({ summary: '회원가입 '})
    async signup(@Body() signUpRequestDto: SignupRequestDto) {
        return 'hello';
    }

}
