import { Module } from '@nestjs/common';
import { AssetService } from './services/asset.service';
import { AssetController } from './controllers/asset.controller';
import { ExchangeAssetService } from './services/exchange-asset.service';
import { BinanceAssetService } from './services/binance-asset.service';
import { BybitAssetService } from './services/bybit-asset.service';
import { BingxAssetService } from './services/bingx-asset.service';
import { BitgetAssetService } from './services/bitget-asset.service';

@Module({
    imports: [],
    controllers: [AssetController],
    providers: [
        AssetService,
        ExchangeAssetService,
        BinanceAssetService,
        BingxAssetService,
        BitgetAssetService,
        BybitAssetService
    ],
    exports: []
})
export class AssetModule {}
