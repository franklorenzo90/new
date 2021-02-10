import { Cat } from './interfaces/cats.interface';
import { CatsService } from './cats.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import {CreateCatsDTO} from "./dto/createCats.dto";

@Controller('cats')
export class CatsController {


    constructor(
        private catsService: CatsService
    ) { }

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Post()
    create(@Body() cat: CreateCatsDTO){
        return this.catsService.create(cat);
    }

}
