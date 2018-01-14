import { ILoginModel } from './interfaces/i-login.model';

export class RegisterModel implements ILoginModel {
    email: string;
    password: string;
    passwordConfirmation: string;

}
