import { Spot } from '@binance/connector-typescript';
import { env } from '~config/env.config';
import { AccountEnum } from '~core/enums/exchanges.enum';

export const M_BINANCE_CLIENT = new Spot(env.BINANCE.M_API_KEY, env.BINANCE.M_API_SECRET, {
    baseURL: env.BINANCE.API_URL
});

export const X_BINANCE_CLIENT = new Spot(env.BINANCE.X_API_KEY, env.BINANCE.X_API_SECRET, {
    baseURL: env.BINANCE.API_URL
});

export const C_BINANCE_CLIENT = new Spot(env.BINANCE.C_API_KEY, env.BINANCE.C_API_SECRET, {
    baseURL: env.BINANCE.API_URL
});

export const BINANCE_CLIENTS = [
    { key: AccountEnum.M, client: M_BINANCE_CLIENT },
    { key: AccountEnum.X, client: X_BINANCE_CLIENT },
    { key: AccountEnum.C, client: C_BINANCE_CLIENT }
];
