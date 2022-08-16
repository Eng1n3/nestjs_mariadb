import { ClassSerializerInterceptor, Controller, Get, HttpCode, HttpStatus, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { UserResponseSerializer } from 'src/latihan13/serializer/user-response.serializer';
import { Latihan12Service } from './latihan12.service';

@Controller('latihan12')
export class Latihan12Controller {
  constructor(private latihan12Service: Latihan12Service) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @HttpCode(HttpStatus.OK)
  @UseFilters(new HttpExceptionFilter)
  async getUserAll(): Promise<any> {
    const users = await this.latihan12Service.getUserAll();
    return {
        statusCode: HttpStatus.OK,
        message: "Success get data.",
        data: users.users.map(user => new UserResponseSerializer(user)),
        count: users.count
    }
  }
}
