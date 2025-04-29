import { Injectable } from '@nestjs/common';
import { BINANCE_EARN_CLIENTS, M_BINANCE_EARN } from '~core/constants/binance.constant';
import { EARN_ASSETS } from '~core/constants/crypto-code.constant';
import { IExchangeEarn } from '~earn/interfaces/exchange-earn.interface';

@Injectable()
export class BinanceEarnService implements IExchangeEarn {
    constructor() {}

    async getBonusAndCurrentAmount(): Promise<any> {
        const flexibleEarn = await (await M_BINANCE_EARN.restAPI.getSimpleEarnFlexibleProductList()).data();
        const { total } = flexibleEarn;
        const totalPages = Math.ceil(total / 100);
        const earnProducts = [];

        for (let current = 1; current <= totalPages; current++) {
            const earnData = await (
                await M_BINANCE_EARN.restAPI.getSimpleEarnFlexibleProductList({ current, size: 100 })
            ).data();
            earnProducts.push(earnData.rows);
        }

        const filteredProducts = earnProducts.flat().filter((product) => EARN_ASSETS.includes(product.asset));

        const productMap = new Map<string, any>();
        for (const product of filteredProducts) {
            productMap.set(product.productId, {
                ...product,
                positions: {}
            });
        }

        for (const { key, client } of BINANCE_EARN_CLIENTS) {
            const subscribedList = await (await client.restAPI.getFlexibleProductPosition({ size: 100 })).data();
            for (const sub of subscribedList.rows) {
                if (productMap.has(sub.productId)) {
                    productMap.get(sub.productId).positions[key] = parseFloat(sub.totalAmount);
                }
            }
        }

        const result = Array.from(productMap.values()).map((product) => {
            const tierKey = Object.keys(product.tierAnnualPercentageRate || {})[0];
            const bonusAmount = parseFloat(tierKey?.split('-')[1]?.replace(/[^\d.]/g, '') || '0');
            const baseAPR = parseFloat(product.latestAnnualPercentageRate || '0') * 100;
            const bonusAPR =
                (parseFloat(product.tierAnnualPercentageRate?.[tierKey] || '0') +
                    parseFloat(product.latestAnnualPercentageRate || '0')) *
                100;

            return {
                asset: product.asset,
                bonusAmount,
                bonusAPR,
                baseAPR,
                positions: product.positions
            };
        });

        return result;
    }
}
