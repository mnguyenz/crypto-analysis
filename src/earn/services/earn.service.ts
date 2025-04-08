import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { ExchangeEarnService } from './exchange-ean.service';

@Injectable()
export class EarnService {
    constructor(private exchangeEarnService: ExchangeEarnService) {}

    async getBonusAndCurrentAmount(): Promise<any> {
        const binanceEarnService = this.exchangeEarnService.getExchange(ExchangeEnum.BINANCE);
        const binance = await binanceEarnService.getBonusAndCurrentAmount();
        // const bybitEarnService = this.exchangeEarnService.getExchange(ExchangeEnum.BYBIT);
        // const bybit = await bybitEarnService.getBonusAndCurrentAmount();
        const bitgetEarnService = this.exchangeEarnService.getExchange(ExchangeEnum.BITGET);
        const bitget = await bitgetEarnService.getBonusAndCurrentAmount();
        return { binance, bitget };
    }
}
