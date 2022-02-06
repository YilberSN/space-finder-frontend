import {User, UserAttribute} from '../model/Model';

export class AuthService {

    public async login(userName: string, password:string): Promise<User | undefined>{
        if(userName === 'user' && password === '1234'){
            return {
                userName: userName,
                email: 'some@email.com'
            }
        }else{
            return undefined
        }
    }

    public async getUserAttrubutes(user:User): Promise<UserAttribute[]>{
        const result: UserAttribute[] = [];
        result.push({
            Name:'Description',
            Value:'Best user ever'
        })
        result.push({
            Name:'Job',
            Value:'Engineer'
        })
        result.push({
            Name:'Age',
            Value:'25'
        })
        result.push({
            Name:'Experience',
            Value:'3 Years'
        })
        return result;
    }
}