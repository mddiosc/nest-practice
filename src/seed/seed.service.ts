import { Injectable } from '@nestjs/common';
import { BrandsService } from './../brands/brands.service';
import { CarsService } from './../cars/cars.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly bransService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.bransService.fillBrandsWithSeedData(BRAND_SEED);
    return 'Seed successful';
  }
}
