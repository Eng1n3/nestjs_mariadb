import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Latihan13Module } from './latihan13/latihan13.module';
import { Latihan12Module } from './latihan12/latihan12.module';

@Module({
  imports: [
    Latihan13Module,
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
    Latihan12Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
