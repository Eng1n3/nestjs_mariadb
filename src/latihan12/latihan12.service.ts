import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Latihan13Service } from 'src/latihan13/latihan13.service';
import { EntityManager } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { IGetUserAll, User } from './interfaces/users.interfaces';

@Injectable()
export class Latihan12Service {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
    private latihan13Service: Latihan13Service,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.getUserOne(username);
    if (user) {
      const checkComparePassword = await this.latihan13Service.comparePassword(
        password,
        user.password,
      );
      if (!checkComparePassword)
        throw new UnauthorizedException({
          message: 'Failed login!',
          mesageClient: 'Failed login!',
        });
      return user;
    }
    return null;
  }

  async getUserOne(username: string): Promise<any> {
    const user = await this.manager.query('call get_all_user(?,?)', [
      ,
      username,
    ]);
    const resUser = user[0][0];
    return resUser;
  }

  async getUserAll(): Promise<IGetUserAll> {
    const getUsers = await this.manager.query('CALL get_all_user(?,?)', [
      undefined,
      '',
    ]);
    const users: User[] = getUsers[0];
    const count = getUsers[1][0].count;
    return { users, count };
  }

  async createUser(createUserDto: CreateUserDto): Promise<string> {
    const hashPassword = await this.latihan13Service.encodeBcrypt(
      createUserDto.password,
    );
    const { name, username, email, password } = {
      ...createUserDto,
      password: hashPassword,
    };
    const createUserSave = await this.manager.query(
      'call create_user(?,?,?,?)',
      [name, username, email, password],
    );
    if (createUserSave[0]?.[0]?.errMessage)
      throw new BadRequestException({
        message: 'Failed create user.',
        messageDev: createUserSave[0][0].errMessage,
      });
    return 'Success create user';
  }
}
