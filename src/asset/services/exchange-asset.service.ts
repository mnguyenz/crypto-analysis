import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { IExchangeAsset } from '~asset/interfaces/exchange-asset.interface';
import { BinanceAssetService } from './binance-asset.service';
import { BybitAssetService } from './bybit-asset.service';
import { BingxAssetService } from './bingx-asset.service';
import { BitgetAssetService } from './bitget-asset.service';

@Injectable()
export class ExchangeAssetService {
    constructor(
        private binanceAssetService: BinanceAssetService,
        private bingxAssetService: BingxAssetService,
        private bitgetAssetService: BitgetAssetService,
        private bybitAssetService: BybitAssetService
    ) {}

    getExchange(exchange: ExchangeEnum): IExchangeAsset {
        switch (exchange) {
            case ExchangeEnum.BINANCE:
                return this.binanceAssetService;
            case ExchangeEnum.BINGX:
                return this.bingxAssetService;
            case ExchangeEnum.BITGET:
                return this.bitgetAssetService;
            case ExchangeEnum.BYBIT:
                return this.bybitAssetService;
            default:
                throw new Error(`Unsupported ExchangeAssetService exchange: ${exchange}`);
        }
    }
}
