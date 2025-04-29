import { Wallet as Binance } from '@binance/wallet';
import { Spot as BingX } from 'bingx-trading-api';
import { RestClientV2 as Bitget } from 'bitget-api';
import { RestClientV5 as Bybit } from 'bybit-api';
import { EXCHANGE_ASSET_MAP } from '~core/constants/exchange.constant';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';

export function getClient(exchange: ExchangeEnum, account: AccountEnum): Binance | BingX | Bitget | Bybit {
    return EXCHANGE_ASSET_MAP[exchange]?.[account] ?? null;
}
