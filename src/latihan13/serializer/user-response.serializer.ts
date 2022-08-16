import { Exclude } from 'class-transformer'


export class UserResponseSerializer {
    
    name: string;

    emailAddress: string;

    username: string;

    @Exclude()
    password: string;

    createdAt: Date;

    updatedAt: Date;

    @Exclude()
    isActive: boolean

    constructor(partial: Partial<UserResponseSerializer>) {
        Object.assign(this, partial)
    }
}