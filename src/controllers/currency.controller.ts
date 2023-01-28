import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { CurrencyService, PriceModel } from '../services/currency.service';
import { RateService } from '../services/rate.service';
import { Rate } from '../repository/rates/rate.entity';

@Controller('currency')
export class CurrencyController {
  constructor(
    private readonly currencyService: CurrencyService,
    private readonly rateService: RateService,
  ) {}

  @Get('/:currency/price')
  getPrice(@Param('currency') currency): Promise<PriceModel> {
    if (currency === undefined) {
      throw new BadRequestException(
        `Missing required param: currency='${currency}'`,
      );
    }

    return this.currencyService.getPrice(currency);
  }

  @Get('/:currency/history')
  getHistory(@Param('currency') currency): Promise<Rate[]> {
    if (currency === undefined) {
      throw new BadRequestException(
        `Missing required param: currency='${currency}'`,
      );
    }

    return this.rateService.findAll(currency);
  }
}
