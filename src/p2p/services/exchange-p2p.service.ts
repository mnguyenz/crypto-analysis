import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { BinanceP2PService } from './binance-p2p.service';
import { IExchangeP2P } from '~p2p/interfaces/exchange-p2p.interface';
import { BybitP2PService } from './bybit-p2p.service';

@Injectable()
export class ExchangeP2PService {
    constructor(
        private binanceP2PService: BinanceP2PService,
        private bybitP2PService: BybitP2PService
    ) {}

    getExchange(exchange: ExchangeEnum): IExchangeP2P {
        switch (exchange) {
            case ExchangeEnum.BINANCE:
                return this.binanceP2PService;
            case ExchangeEnum.BYBIT:
                return this.bybitP2PService;
            default:
                throw new Error(`Unsupported ExchangeAssetService exchange: ${exchange}`);
        }
    }
}
