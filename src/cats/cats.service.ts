import { Cat } from './interfaces/cats.interface';
import { CreateCatsDTO } from './dto/createCats.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    cats: Cat[] = [
        {
            id: 0,
            name: 'cat1',
            age: 1,
            breed: 'siamese'
        },
        {
            id: 1,
            name: 'cat2',
            age: 4,
            breed: 'common'
        },
        {
            id: 2,
            name: 'cat2',
            age: 2,
            breed: 'egipt'
        }
    ]

    findAll(): Cat[] {
        return this.cats;
    }

    create(createCatsDTO: CreateCatsDTO) {
        let cat = {
            id: this.cats.length,
            name: createCatsDTO.name,
            age: createCatsDTO.age,
            breed: createCatsDTO.breed
        };
        this.cats.push(cat);
        return 'The cat was created succefully';
    }
}