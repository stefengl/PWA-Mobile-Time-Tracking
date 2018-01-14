import { ILoginModel } from './interfaces/i-login.model';

export class LoginModel implements ILoginModel {
    email: string;
    password: string;
}
