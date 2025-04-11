import { Spot as BinanceSpot } from '@binance/connector-typescript';
import { RestClientV2 as Bitget } from 'bitget-api';
import { RestClientV5 as Bybit } from 'bybit-api';
import { EXCHANGE_CLIENT_MAP } from '~core/constants/exchange.constant';
import { AccountEnum, ExchangeEnum } from '~core/enums/exchanges.enum';

export function getClient(exchange: ExchangeEnum, account: AccountEnum): BinanceSpot | Bybit | Bitget {
    return EXCHANGE_CLIENT_MAP[exchange]?.[account] ?? null;
}
