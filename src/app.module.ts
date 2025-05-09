import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EarnModule } from '~earn/earn.module';
import { AssetModule } from '~asset/asset.module';
import { P2PModule } from '~p2p/p2p.module';
import { GoogleSheetModule } from '~google-sheet/google-sheet.module';

@Module({
    imports: [AssetModule, EarnModule, GoogleSheetModule, P2PModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
