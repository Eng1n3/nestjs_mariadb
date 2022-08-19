import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Latihan13Module } from './latihan13/latihan13.module';
import { Latihan12Module } from './latihan12/latihan12.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'eng1n3',
      password: 'Tr0j4n_w4r399',
      database: 'nestjs_latihan',
      synchronize: true,
      autoLoadEntities: true,
    }),
    Latihan13Module,
    Latihan12Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
