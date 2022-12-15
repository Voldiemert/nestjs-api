import {Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(): {msg: string} {
        return this.authService.signUp();
    }

    @Post('signin')
    signIn(): {msg: string} {
        return this.authService.signIn();
    }
}