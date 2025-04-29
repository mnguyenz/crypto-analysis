import { Injectable } from '@nestjs/common';
import { AccountTypeEnum, Spot } from 'bingx-trading-api';
import { IExchangeAsset } from '~asset/interfaces/exchange-asset.interface';
import { AssetResponse } from '~asset/types/asset-response.type';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';

import { getClient } from '~core/helpers/exchange.helper';

@Injectable()
export class BingxAssetService implements IExchangeAsset {
    constructor() {}

    async overview(account: AccountEnum): Promise<any> {
        try {
            const accounts = [AccountTypeEnum.SPOT, AccountTypeEnum.WEALTH];
            const client = getClient(ExchangeEnum.BINGX, account) as Spot;
            let totalBalance = 0;
            for (const accountType of accounts) {
                const overview = await client.assetOverview({ accountType });
                totalBalance += parseFloat(overview.data[0]?.usdtBalance) || 0;
            }

            return { exchange: ExchangeEnum.BINGX, account, totalBalance };
        } catch (error) {
            console.error('Error BingxAssetService overview:', error);
        }
    }

    async details(account: AccountEnum): Promise<AssetResponse> {
        try {
            return {};
        } catch (error) {
            console.error('Error BingxAssetService details:', error);
        }
    }
}
