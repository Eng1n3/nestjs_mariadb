import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Latihan12Controller } from './latihan12.controller';
import { Latihan12Service } from './latihan12.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [Latihan12Controller],
  providers: [Latihan12Service],
})
export class Latihan12Module {}
