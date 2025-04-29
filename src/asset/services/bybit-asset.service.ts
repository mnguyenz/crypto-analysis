import { Injectable } from '@nestjs/common';
import { IExchangeAsset } from '~asset/interfaces/exchange-asset.interface';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';
import { getClient } from '~core/helpers/exchange.helper';
import { RestClientV5 } from 'bybit-api';
import { AssetResponse } from '~asset/types/asset-response.type';
import { POSTFIX_NO_HYPHEN_USDT } from '~core/constants/crypto-code.constant';

@Injectable()
export class BybitAssetService implements IExchangeAsset {
    constructor() {}

    async overview(account: AccountEnum): Promise<any> {
        try {
            let totalBalance = 0;
            const client = getClient(ExchangeEnum.BYBIT, account) as RestClientV5;
            const spotAssets = await client.getWalletBalance({ accountType: 'UNIFIED' });
            totalBalance += spotAssets.result.list.reduce((sum, item) => sum + parseFloat(item.totalEquity), 0);
            const savingAssets = await client.getEarnPosition({ category: 'FlexibleSaving' });
            for (const item of savingAssets.result.list) {
                if (item.coin === 'USDT') {
                    totalBalance += parseFloat(item.amount);
                } else {
                    const ticker = await client.getTickers({
                        category: 'spot',
                        symbol: `${item.coin}${POSTFIX_NO_HYPHEN_USDT}`
                    });
                    totalBalance += parseFloat(item.amount) * parseFloat(ticker.result.list[0].lastPrice);
                }
            }
            return { exchange: ExchangeEnum.BYBIT, account, totalBalance };
        } catch (error) {
            console.error('Error BybitAssetService overview:', error);
        }
    }

    async details(account: AccountEnum): Promise<AssetResponse> {
        try {
            return {};
        } catch (error) {
            console.error('Error BybitAssetService details:', error);
        }
    }
}
