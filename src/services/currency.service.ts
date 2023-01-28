import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom, map } from 'rxjs';
import { Repository } from 'typeorm';
import { env } from 'process';
import { Rate } from '../repository/rates/rate.entity';

export type PriceModel = {
  symbol: string;
  price: string;
};

@Injectable()
export class CurrencyService {
  constructor(private readonly http: HttpService) {}

  getPrice(currency: string): Promise<PriceModel> {
    const url = `${env.PRICE_SOURCE_URL}?symbol=${currency}`;
    return firstValueFrom(
      this.http.get<PriceModel>(url).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
  }

  getHistory(currency: string): string {
    return currency;
  }
}
