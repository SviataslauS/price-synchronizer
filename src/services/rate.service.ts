import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rate } from '../repository/rates/rate.entity';

export type PriceModel = {
  symbol: string;
  price: string;
};

@Injectable()
export class RateService {
  constructor(
    @InjectRepository(Rate)
    private readonly ratesRepository: Repository<Rate>,
  ) {}

  async findAll(currency: string): Promise<Rate[]> {
    return this.ratesRepository.find({
      where: { currency: currency },
      order: {
        date: 'DESC',
      },
    });
  }
}
