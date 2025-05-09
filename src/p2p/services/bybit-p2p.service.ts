import { Injectable } from '@nestjs/common';
import { M_BYBIT_CLIENT } from '~core/constants/bybit.constant';
import { P2P_SHEET_ID } from '~core/constants/p2p.constant';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';
import { GoogleSheetService } from '~google-sheet/services/google-sheet.service';
import { IExchangeP2P } from '~p2p/interfaces/exchange-p2p.interface';

@Injectable()
export class BybitP2PService implements IExchangeP2P {
    constructor(private googleSheetService: GoogleSheetService) {}

    async seedP2PTrades(): Promise<any> {
        let page = 1;
        const size = 30;
        const batchRequests = [];

        while (true) {
            const response = await M_BYBIT_CLIENT.getP2POrders({ status: 50, page, size });
            const orders = response.result.items;
            const count = response.result.count;

            for (const order of orders) {
                const values = [
                    ExchangeEnum.BYBIT,
                    order.id,
                    AccountEnum.M,
                    new Date(Number(order.createDate)).toISOString().split('T')[0],
                    order.amount,
                    order.price,
                    order.notifyTokenQuantity
                ];

                batchRequests.push({
                    range: `${order.side === 0 ? 'Buy' : 'Sell'}!A1`,
                    values: [values]
                });
            }

            if (batchRequests.length >= 30) {
                await this.googleSheetService.batchUpsert(P2P_SHEET_ID, batchRequests);
                batchRequests.length = 0;
            }

            const totalPages = Math.ceil(count / size);
            if (page >= totalPages) break;
            page++;
        }
        if (batchRequests.length > 0) {
            await this.googleSheetService.batchUpsert(P2P_SHEET_ID, batchRequests);
        }

        return true;
    }
}
