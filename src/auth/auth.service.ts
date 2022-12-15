import {Injectable, Post} from "@nestjs/common";

@Injectable({})
export class AuthService{

    signUp(): {msg: string} {
        return {
            msg: 'I have signed up'
        }
    }

    signIn(): {msg: string} {
        return {
            msg: 'I am signed in'
        }
    }
}