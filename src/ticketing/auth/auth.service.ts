import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { UserService } from "../user/user.service";
import { Payload } from "../interfaces/payload.interface";

@Injectable()
export class AuthService {
    // eslint-disable-next-line no-unused-vars
    constructor(private userService: UserService) {}

    async signPayload(payload: Payload) {
        return sign(payload, process.env.SECRET_KEY, {
            expiresIn: process.env.TOKEN_EXPIRATION
        });
    }

    async validateUser(payload: Payload) {
        return await this.userService.findByPayload(payload);
    }
}
