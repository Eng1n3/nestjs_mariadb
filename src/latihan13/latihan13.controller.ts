import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { Latihan13Service } from './latihan13.service';

@Controller('latihan13')
export class Latihan13Controller {
  constructor(private latihan13Service: Latihan13Service) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  @UseFilters(new HttpExceptionFilter())
  async login(): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Login successfull.',
    };
  }
}
