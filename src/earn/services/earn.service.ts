import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { ExchangeEarnService } from './exchange-ean.service';

@Injectable()
export class EarnService {
    constructor(private exchangeEarnService: ExchangeEarnService) {}

    async getBonusAndCurrentAmount(): Promise<any> {
        const binanceService = this.exchangeEarnService.getExchange(ExchangeEnum.BINANCE);
        const x = await binanceService.getBonusAndCurrentAmount();
        return x;
    }
}
