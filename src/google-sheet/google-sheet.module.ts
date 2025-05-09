import { Module } from '@nestjs/common';
import { GoogleSheetService } from './services/google-sheet.service';

@Module({
    imports: [],
    controllers: [],
    providers: [GoogleSheetService],
    exports: [GoogleSheetService]
})
export class GoogleSheetModule {}
