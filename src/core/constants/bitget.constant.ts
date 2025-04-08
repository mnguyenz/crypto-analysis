import { RestClientV2 } from 'bitget-api';
import { env } from '~config/env.config';

export const BITGET_PUBLIC_CLIENT = new RestClientV2();

export const M_BITGET_CLIENT = new RestClientV2({
    apiKey: env.BITGET.M_API_KEY,
    apiSecret: env.BITGET.M_API_SECRET,
    apiPass: env.BITGET.M_API_PASS
});

export const X_BITGET_CLIENT = new RestClientV2({
    apiKey: env.BITGET.X_API_KEY,
    apiSecret: env.BITGET.X_API_SECRET,
    apiPass: env.BITGET.X_API_PASS
});

export const C_BITGET_CLIENT = new RestClientV2({
    apiKey: env.BITGET.C_API_KEY,
    apiSecret: env.BITGET.C_API_SECRET,
    apiPass: env.BITGET.C_API_PASS
});

export const BITGET_CLIENTS = [
    { key: 'M', client: M_BITGET_CLIENT },
    { key: 'X', client: X_BITGET_CLIENT },
    { key: 'C', client: C_BITGET_CLIENT }
];
