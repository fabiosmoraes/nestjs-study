import { Controller, Get } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    return 'This action returns all coffes';
  }
}
