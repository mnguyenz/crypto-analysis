import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { BinanceEarnService } from './binance-earn.service';
import { IExchangeEarn } from '~earn/interfaces/exchange-earn.interface';

@Injectable()
export class ExchangeEarnService {
    constructor(private binanceEarnService: BinanceEarnService) {}

    getExchange(exchange: ExchangeEnum): IExchangeEarn {
        switch (exchange) {
            case ExchangeEnum.BINANCE:
                return this.binanceEarnService;
            default:
                throw new Error(`Unsupported ExchangeAssetService exchange: ${exchange}`);
        }
    }
}
