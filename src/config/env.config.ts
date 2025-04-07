import dotenv from 'dotenv';
dotenv.config();

export const env = {
    APP_PORT: process.env.APP_PORT || 4003,
    BINANCE: {
        API_URL: process.env.BINANCE_API_URL,
        M_API_KEY: process.env.M_BINANCE_API_KEY,
        M_API_SECRET: process.env.M_BINANCE_API_SECRET,
        X_API_KEY: process.env.X_BINANCE_API_KEY,
        X_API_SECRET: process.env.X_BINANCE_API_SECRET,
        C_API_KEY: process.env.C_BINANCE_API_KEY,
        C_API_SECRET: process.env.C_BINANCE_API_SECRET
    },
    BYBIT: {
        M_API_KEY: process.env.M_BYBIT_API_KEY,
        M_API_SECRET: process.env.M_BYBIT_API_SECRET,
        X_API_KEY: process.env.X_BYBIT_API_KEY,
        X_API_SECRET: process.env.X_BYBIT_API_SECRET
    }
};
