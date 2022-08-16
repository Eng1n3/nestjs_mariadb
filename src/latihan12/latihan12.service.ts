import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Users, UsersAndCount } from './interfaces/users.interfaces';

@Injectable()
export class Latihan12Service {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  async getUserAll(): Promise<any> {
    const getUsers = await this.manager.query('CALL get_all_user()');
    const users: Users[] = getUsers[0]
    const count = getUsers[1][0].count
    return {users, count};
  }
}
