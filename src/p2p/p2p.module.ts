import { Module } from '@nestjs/common';
import { BinanceP2PService } from './services/binance-p2p.service';
import { P2PController } from './controllers/p2p.controller';
import { P2PService } from './services/p2p.service';
import { ExchangeP2PService } from './services/exchange-p2p.service';
import { BybitP2PService } from './services/bybit-p2p.service';
import { GoogleSheetModule } from '~google-sheet/google-sheet.module';

@Module({
    imports: [GoogleSheetModule],
    controllers: [P2PController],
    providers: [P2PService, ExchangeP2PService, BinanceP2PService, BybitP2PService],
    exports: []
})
export class P2PModule {}
