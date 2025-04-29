import { C2C } from '@binance/c2c';
import { SimpleEarn } from '@binance/simple-earn';
import { Wallet } from '@binance/wallet';
import { env } from '~config/env.config';
import { AccountEnum } from '~core/enums/exchanges.enum';

const configurationMAccount = {
    apiKey: env.BINANCE.M_API_KEY,
    apiSecret: env.BINANCE.M_API_SECRET,
    basePath: env.BINANCE.API_URL
};

const configurationXAccount = {
    apiKey: env.BINANCE.X_API_KEY,
    apiSecret: env.BINANCE.X_API_SECRET,
    basePath: env.BINANCE.API_URL
};

const configurationCAccount = {
    apiKey: env.BINANCE.C_API_KEY,
    apiSecret: env.BINANCE.C_API_SECRET,
    basePath: env.BINANCE.API_URL
};

export const M_BINANCE_EARN = new SimpleEarn({ configurationRestAPI: configurationMAccount });
export const X_BINANCE_EARN = new SimpleEarn({ configurationRestAPI: configurationXAccount });
export const C_BINANCE_EARN = new SimpleEarn({ configurationRestAPI: configurationCAccount });

export const M_BINANCE_WALLET = new Wallet({ configurationRestAPI: configurationMAccount });
export const X_BINANCE_WALLET = new Wallet({ configurationRestAPI: configurationXAccount });
export const C_BINANCE_WALLET = new Wallet({ configurationRestAPI: configurationCAccount });

export const M_BINANCE_C2C = new C2C({ configurationRestAPI: configurationMAccount });
export const X_BINANCE_C2C = new C2C({ configurationRestAPI: configurationXAccount });
export const C_BINANCE_C2C = new C2C({ configurationRestAPI: configurationCAccount });

export const BINANCE_EARN_CLIENTS = [
    { key: AccountEnum.M, client: M_BINANCE_EARN },
    { key: AccountEnum.X, client: X_BINANCE_EARN },
    { key: AccountEnum.C, client: C_BINANCE_EARN }
];
