import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { IExchangeAsset } from '~asset/interfaces/exchange-asset.interface';
import { BinanceAssetService } from './binance-asset.service';

@Injectable()
export class ExchangeAssetService {
    constructor(private binanceAssetService: BinanceAssetService) {}

    getExchange(exchange: ExchangeEnum): IExchangeAsset {
        switch (exchange) {
            case ExchangeEnum.BINANCE:
                return this.binanceAssetService;
            default:
                throw new Error(`Unsupported ExchangeAssetService exchange: ${exchange}`);
        }
    }
}
