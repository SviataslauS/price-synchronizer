import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateService } from '../../services/rate.service';
import { CurrencyController } from '../../controllers/currency.controller';
import { Rate } from './rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rate])],
  providers: [RateService],
  controllers: [CurrencyController],
  exports: [RateService],
})
export class RatesModule {}
