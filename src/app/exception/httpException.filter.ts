import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const err = exception.getResponse() as | string | { error: string; statusCode: 400; message: string[]};

        response.status(status).json( { msg: err });

        // if(typeof err !== 'string' && err.error === 'Bad Request') {
        //     return response.status(status).json({
        //         success: false,
        //         code: status,
        //         data: err.message
        //     })
        // }
    }
}
