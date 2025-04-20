import { Injectable } from '@nestjs/common';
import { M_BINANCE_C2C } from '~core/constants/binance.constant';
import { IExchangeP2P } from '~p2p/interfaces/exchange-p2p.interface';

@Injectable()
export class BinanceP2PService implements IExchangeP2P {
    constructor() {}

    async getP2PTrades(): Promise<any> {
        const flexibleP2P = await M_BINANCE_C2C.restAPI.getC2CTradeHistory({
            startTime: 1741136400,
            endTime: 1741482000
        });
        const result = await flexibleP2P.data();
        console.log('result', result);
        return result;
    }
}
