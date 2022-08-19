import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { UserResponseSerializer } from 'src/latihan13/serializer/user-response.serializer';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserInterface } from './interfaces/create-user.interface';
import { UsersResponse } from './interfaces/users.interfaces';
import { Latihan12Service } from './latihan12.service';

@Controller('latihan12')
export class Latihan12Controller {
  constructor(private latihan12Service: Latihan12Service) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  @UseFilters(new HttpExceptionFilter())
  async login(): Promise<any> {
    return { statusCode: HttpStatus.OK, message: 'Login successfull.' };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('user/:username')
  @HttpCode(HttpStatus.OK)
  @UseFilters(new HttpExceptionFilter())
  async getUserOne(@Param('username') username: string): Promise<any> {
    const user = await this.latihan12Service.getUserOne(username);
    return {
      statusCode: HttpStatus.OK,
      message: 'Success get data.',
      data: new UserResponseSerializer(user),
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @HttpCode(HttpStatus.OK)
  @UseFilters(new HttpExceptionFilter())
  async getUserAll(): Promise<UsersResponse> {
    const users = await this.latihan12Service.getUserAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Success get data.',
      data: users.users.map((user) => new UserResponseSerializer(user)),
      count: users.count,
    };
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseFilters(new HttpExceptionFilter())
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserInterface> {
    await this.latihan12Service.createUser(createUserDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Success created user',
    };
  }
}
