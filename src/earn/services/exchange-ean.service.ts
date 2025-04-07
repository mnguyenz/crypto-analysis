import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { BinanceEarnService } from './binance-earn.service';
import { IExchangeEarn } from '~earn/interfaces/exchange-earn.interface';
import { BybitEarnService } from './bybit-earn.service';

@Injectable()
export class ExchangeEarnService {
    constructor(
        private binanceEarnService: BinanceEarnService,
        private bybitEarnService: BybitEarnService
    ) {}

    getExchange(exchange: ExchangeEnum): IExchangeEarn {
        switch (exchange) {
            case ExchangeEnum.BINANCE:
                return this.binanceEarnService;
            case ExchangeEnum.BYBIT:
                return this.bybitEarnService;
            default:
                throw new Error(`Unsupported ExchangeAssetService exchange: ${exchange}`);
        }
    }
}
