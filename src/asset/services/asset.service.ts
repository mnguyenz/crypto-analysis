import { Injectable } from '@nestjs/common';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';
import { ExchangeAssetService } from './exchange-asset.service';
import { AssetResponse } from '~asset/types/asset-response.type';
import { EXCHANGE_ASSET_MAP } from '~core/constants/exchange.constant';

@Injectable()
export class AssetService {
    constructor(private exchangeAssetService: ExchangeAssetService) {}

    async details(): Promise<AssetResponse> {
        const assets: Record<string, number> = {};

        await Promise.all(
            Object.entries(EXCHANGE_ASSET_MAP).flatMap(([exchange, accounts]) =>
                Object.keys(accounts).map(async (account) => {
                    const service = this.exchangeAssetService.getExchange(exchange as ExchangeEnum);
                    const overview = await service.details(account as unknown as AccountEnum);
                    for (const [asset, amount] of Object.entries(overview)) {
                        assets[asset] =
                            (assets[asset] || 0) + (typeof amount === 'number' ? amount : parseFloat(String(amount)));
                    }
                })
            )
        );

        return assets;
    }

    async overview(): Promise<any> {
        const result: Record<string, number> = {
            total: 0
        };

        await Promise.all(
            Object.entries(EXCHANGE_ASSET_MAP).flatMap(([exchange, accounts]) =>
                Object.keys(accounts).map(async (account) => {
                    const service = this.exchangeAssetService.getExchange(exchange as ExchangeEnum);
                    const overview = await service.overview(account as unknown as AccountEnum);

                    const key = `${overview.exchange} - ${overview.account}`;
                    result[key] = overview.totalBalance;
                    result.total += overview.totalBalance;
                })
            )
        );

        return result;
    }
}
