import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class Latihan13Service {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  async comparePassword(
    password: string,
    hashPassword: string,
  ): Promise<string> {
    console.log(38, password, hashPassword);
    const isMatch = await bcrypt.compare(password, hashPassword);
    if (isMatch) return 'Success validate password';
    return null;
  }

  async encodeBcrypt(password: string): Promise<string> {
    const encode = await bcrypt.hash(password, saltOrRounds);
    return encode;
  }
}
