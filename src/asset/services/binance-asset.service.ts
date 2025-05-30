import { Wallet } from '@binance/wallet';
import { Injectable } from '@nestjs/common';
import { IExchangeAsset } from '~asset/interfaces/exchange-asset.interface';
import { AssetResponse } from '~asset/types/asset-response.type';
import { ASSETS } from '~core/constants/crypto-code.constant';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';

import { getClient } from '~core/helpers/exchange.helper';

@Injectable()
export class BinanceAssetService implements IExchangeAsset {
    constructor() {}

    async overview(account: AccountEnum): Promise<any> {
        try {
            const client = getClient(ExchangeEnum.BINANCE, account) as Wallet;
            const overview = await (
                await client.restAPI.queryUserWalletBalance({ quoteAsset: ASSETS.FIAT.USDT })
            ).data();
            const totalBalance = overview.reduce((sum, item) => sum + parseFloat(item.balance), 0);
            return { exchange: ExchangeEnum.BINANCE, account, totalBalance };
        } catch (error) {
            console.error('Error BinanceAssetService overview:', error);
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
            console.error('Error BinanceAssetService details:', error);
        }
    }
}
