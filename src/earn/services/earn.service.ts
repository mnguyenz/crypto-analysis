import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { ExchangeEarnService } from './exchange-ean.service';

@Injectable()
export class EarnService {
    constructor(private exchangeEarnService: ExchangeEarnService) {}

    async getBonusAndCurrentAmount(): Promise<any> {
        const binanceService = this.exchangeEarnService.getExchange(ExchangeEnum.BINANCE);
        const binance = await binanceService.getBonusAndCurrentAmount();
        // const bybitEarnService = this.exchangeEarnService.getExchange(ExchangeEnum.BYBIT);
        // const bybit = await bybitEarnService.getBonusAndCurrentAmount();
        return { binance };
    }
}
