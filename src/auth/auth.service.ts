import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";

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