import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Latihan12Service } from '../latihan12.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private latihan12Service: Latihan12Service) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.latihan12Service.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Failed login!',
        messageDev: 'Gagal login!',
      });
    }
    return user;
  }
}
