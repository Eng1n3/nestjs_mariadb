import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Latihan13Module } from 'src/latihan13/latihan13.module';
import { Latihan12Controller } from './latihan12.controller';
import { Latihan12Service } from './latihan12.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [TypeOrmModule.forFeature(), PassportModule, Latihan13Module],
  controllers: [Latihan12Controller],
  providers: [Latihan12Service, LocalStrategy],
  exports: [Latihan12Service]
})
export class Latihan12Module {}
