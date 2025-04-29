import { RestClientV2 as Bitget } from 'bitget-api';
import { Injectable } from '@nestjs/common';
import { IExchangeAsset } from '~asset/interfaces/exchange-asset.interface';
import { AssetResponse } from '~asset/types/asset-response.type';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';

import { getClient } from '~core/helpers/exchange.helper';

@Injectable()
export class BitgetAssetService implements IExchangeAsset {
    constructor() {}

    async overview(account: AccountEnum): Promise<any> {
        try {
            const client = getClient(ExchangeEnum.BITGET, account) as Bitget;
            const overview = await client.getBalances();
            console.log('overview', overview);
            const totalBalance = overview.data.reduce((sum, item) => sum + parseFloat(item.usdtBalance), 0);
            return { exchange: ExchangeEnum.BITGET, account, totalBalance };
        } catch (error) {
            console.error('Error BitgetAssetService overview:', error);
        }
    }

    async details(account: AccountEnum): Promise<AssetResponse> {
        try {
            // const client = getClient(ExchangeEnum.BINANCE, account) as Spot;
            // const spotAssets = await client.userAsset();
            // const flexibleEarns = await client.getFlexibleProductPosition({ size: 100 });
            // const lockedEarns = await client.getLockedProductPosition({ size: 100 });
            // const spotResponse = transformAssetsToResponse(spotAssets, 'asset', 'free');
            // const flexibleEarnsResponse = transformAssetsToResponse(flexibleEarns.rows, 'asset', 'totalAmount');
            // const lockedEarnsResponse = transformAssetsToResponse(lockedEarns.rows, 'asset', 'amount');
            // return mergeAndSumAssets(spotResponse, flexibleEarnsResponse, lockedEarnsResponse);
            return {};
        } catch (error) {
            console.error('Error BitgetAssetService details:', error);
        }
    }
}
