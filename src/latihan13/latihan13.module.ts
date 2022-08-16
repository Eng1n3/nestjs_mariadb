import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Latihan13Controller } from './latihan13.controller';
import { Latihan13Service } from './latihan13.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [Latihan13Controller],
  providers: [Latihan13Service]
})
export class Latihan13Module {}
