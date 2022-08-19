import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Latihan13Controller } from './latihan13.controller';
import { Latihan13Service } from './latihan13.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [Latihan13Controller],
  providers: [Latihan13Service],
  exports: [Latihan13Service]
})
export class Latihan13Module {}
