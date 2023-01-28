import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CurrencyController } from './controllers/currency.controller';
import { CurrencyService } from './services/currency.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { env } from 'process';
import { Rate } from './repository/rates/rate.entity';
import { RatesModule } from './repository/rates/rates.module';

const isProductionMode = env.PROD_MODE === 'true';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Rate],
      synchronize: !isProductionMode,
    }),
    RatesModule,
    HttpModule,
  ],
  controllers: [AppController, CurrencyController],
  providers: [CurrencyService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
