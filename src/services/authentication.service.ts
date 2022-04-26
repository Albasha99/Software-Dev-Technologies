import { Injectable } from "@angular/core";
import { LoginResponse } from "src/models/login.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    public login(username: string, password: string): LoginResponse {
        const correctUser = 'user@email.com';
        const correctPassword = 'easy1234';

        const success = username === correctUser && password === correctPassword;

        if (success) {
            const user = {
                firstName: 'John',
                lastName: 'Doe'
            };

            return {
                user: user,
                validationError: false
            };
        } else {
            return {
                validationError: true
            };
        }
    }
}
