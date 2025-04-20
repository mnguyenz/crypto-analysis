import { Injectable } from '@nestjs/common';
import { M_BYBIT_CLIENT } from '~core/constants/bybit.constant';
import { IExchangeP2P } from '~p2p/interfaces/exchange-p2p.interface';

@Injectable()
export class BybitP2PService implements IExchangeP2P {
    constructor() {}

    async getP2PTrades(): Promise<any> {
        const flexibleP2P = await M_BYBIT_CLIENT.getP2POrders({ page: 1, size: 100 });
        return flexibleP2P;
    }
}
