import { Injectable } from '@nestjs/common';
import { ExchangeEnum } from '~core/enums/exchanges.enum';
import { ExchangeP2PService } from './exchange-p2p.service';

@Injectable()
export class P2PService {
    constructor(private exchangeP2PService: ExchangeP2PService) {}

    async getP2PTrades(): Promise<any> {
        const binanceP2PService = this.exchangeP2PService.getExchange(ExchangeEnum.BINANCE);
        const binance = await binanceP2PService.getP2PTrades();
        const bybitP2PService = this.exchangeP2PService.getExchange(ExchangeEnum.BYBIT);
        const bybit = await bybitP2PService.getP2PTrades();
        return { binance, bybit };
    }
}
