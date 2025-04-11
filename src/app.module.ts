import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EarnModule } from '~earn/earn.module';
import { AssetModule } from '~asset/asset.module';

@Module({
    imports: [AssetModule, EarnModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
