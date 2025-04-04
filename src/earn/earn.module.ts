import { Module } from '@nestjs/common';
import { BinanceSavingService } from './services/binance-saving.service';
import { SavingController } from './controllers/earn.controller';
import { SavingService } from './services/saving.service';
import { BybitSavingService } from './services/bybit-saving.service';
import { ExchangeSavingService } from './services/exchange-saving.service';

@Module({
    imports: [],
    controllers: [SavingController],
    providers: [
        SavingService,
        ExchangeSavingService,
        BinanceSavingService,
        BybitSavingService
    ],
    exports: []
})
export class EarnModule {}
