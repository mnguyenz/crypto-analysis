import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';
import { C_BINANCE_CLIENT, M_BINANCE_CLIENT, X_BINANCE_CLIENT } from './binance.constant';

export const EXCHANGE_CLIENT_MAP = {
    [ExchangeEnum.BINANCE]: {
        [AccountEnum.M]: M_BINANCE_CLIENT,
        [AccountEnum.X]: X_BINANCE_CLIENT,
        [AccountEnum.C]: C_BINANCE_CLIENT
    }
};
