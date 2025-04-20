import { Injectable } from '@nestjs/common';
import { BITGET_CLIENTS, M_BITGET_CLIENT } from '~core/constants/bitget.constant';
import { EARN_ASSETS } from '~core/constants/crypto-code.constant';
import { IExchangeEarn } from '~earn/interfaces/exchange-earn.interface';

@Injectable()
export class BitgetEarnService implements IExchangeEarn {
    constructor() {}

    async getBonusAndCurrentAmount(): Promise<any> {
        const earnProducts = await M_BITGET_CLIENT.getEarnSavingsProducts();
        const filteredProducts = earnProducts.data.filter(
            (product) => EARN_ASSETS.includes(product.coin) && product.apyList.length > 1
        );

        const productMap = new Map<string, any>();
        for (const product of filteredProducts) {
            productMap.set(product.coin, {
                ...product,
                positions: {}
            });
        }

        for (const { key, client } of BITGET_CLIENTS) {
            const earnAssets = await client.getEarnAccount();
            for (const asset of earnAssets.data) {
                if (productMap.has(asset.coin)) {
                    productMap.get(asset.coin).positions[key] = parseFloat(asset.amount);
                }
            }
        }

        const result = Array.from(productMap.values()).map((product) => {
            const bonusAmount = parseFloat(product.apyList[0].maxStepVal);
            const baseAPR = parseFloat(product.apyList[1].currentApy);
            const bonusAPR = parseFloat(product.apyList[0].currentApy);
            return {
                asset: product.coin,
                bonusAmount,
                bonusAPR,
                baseAPR,
                positions: product.positions
            };
        });

        return result;
    }
}
