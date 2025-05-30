import { Module } from '@nestjs/common';
import { BinanceEarnService } from './services/binance-earn.service';
import { EarnController } from './controllers/earn.controller';
import { EarnService } from './services/earn.service';
import { ExchangeEarnService } from './services/exchange-ean.service';
import { BybitEarnService } from './services/bybit-earn.service';
import { BitgetEarnService } from './services/bitget-earn.service';

@Module({
    imports: [],
    controllers: [EarnController],
    providers: [EarnService, ExchangeEarnService, BinanceEarnService, BitgetEarnService, BybitEarnService],
    exports: []
})
export class EarnModule {}
