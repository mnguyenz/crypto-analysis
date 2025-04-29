import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';
import { C_BINANCE_WALLET, M_BINANCE_WALLET, X_BINANCE_WALLET } from './binance.constant';
import { M_BYBIT_CLIENT, X_BYBIT_CLIENT } from './bybit.constant';
import { C_BINGX_CLIENT, M_BINGX_CLIENT, X_BINGX_CLIENT } from './bingx.constant';
import { C_BITGET_CLIENT, M_BITGET_CLIENT, X_BITGET_CLIENT } from './bitget.constant';

export const EXCHANGE_ASSET_MAP = {
    [ExchangeEnum.BINANCE]: {
        [AccountEnum.M]: M_BINANCE_WALLET,
        [AccountEnum.X]: X_BINANCE_WALLET,
        [AccountEnum.C]: C_BINANCE_WALLET
    },
    [ExchangeEnum.BINGX]: {
        [AccountEnum.M]: M_BINGX_CLIENT,
        [AccountEnum.X]: X_BINGX_CLIENT,
        [AccountEnum.C]: C_BINGX_CLIENT
    },
    [ExchangeEnum.BITGET]: {
        [AccountEnum.M]: M_BITGET_CLIENT,
        [AccountEnum.X]: X_BITGET_CLIENT,
        [AccountEnum.C]: C_BITGET_CLIENT
    },
    [ExchangeEnum.BYBIT]: {
        [AccountEnum.M]: M_BYBIT_CLIENT,
        [AccountEnum.X]: X_BYBIT_CLIENT
    }
};
