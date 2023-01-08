import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Civic',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Jeep',
    //   model: 'CHerokee',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findObeById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create(createcarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createcarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findObeById(id);
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = { ...car, ...updateCarDto, id };
    return this.cars[index];
  }

  delete(id: string) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1)
      throw new NotFoundException(`Car with id '${id}' not found`);
    this.cars.splice(index, 1);
    return { message: `Car with id '${id}' was deleted` };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
