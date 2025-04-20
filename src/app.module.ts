import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EarnModule } from '~earn/earn.module';
import { AssetModule } from '~asset/asset.module';
import { P2PModule } from '~p2p/p2p.module';

@Module({
    imports: [AssetModule, EarnModule, P2PModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
