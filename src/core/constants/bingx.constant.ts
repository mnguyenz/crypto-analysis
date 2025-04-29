import { Spot } from 'bingx-trading-api';
import { env } from '~config/env.config';
import { AccountEnum } from '~core/enums/exchanges.enum';

export const M_BINGX_CLIENT = new Spot(env.BINGX.M_API_KEY, env.BINGX.M_API_SECRET);
export const X_BINGX_CLIENT = new Spot(env.BINGX.X_API_KEY, env.BINGX.X_API_SECRET);
export const C_BINGX_CLIENT = new Spot(env.BINGX.C_API_KEY, env.BINGX.C_API_SECRET);

export const BINGX_CLIENTS = [
    { key: AccountEnum.M, client: M_BINGX_CLIENT },
    { key: AccountEnum.X, client: X_BINGX_CLIENT },
    { key: AccountEnum.C, client: C_BINGX_CLIENT }
];
