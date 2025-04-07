import { Injectable } from '@nestjs/common';
import { M_BYBIT_CLIENT } from '~core/constants/bybit.constant';
import { IExchangeEarn } from '~earn/interfaces/exchange-earn.interface';

@Injectable()
export class BybitEarnService implements IExchangeEarn {
    constructor() {}

    async getBonusAndCurrentAmount(): Promise<any> {
        const flexibleEarn = await M_BYBIT_CLIENT.getEarnProduct({ category: 'FlexibleSaving' });
        return flexibleEarn;
    }
}
