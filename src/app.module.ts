import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EarnModule } from '~earn/earn.module';

@Module({
    imports: [EarnModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
