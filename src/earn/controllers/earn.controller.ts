import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SavingService } from '~saving/services/saving.service';

@Controller('savings')
@ApiTags('Savings')
export class SavingController {
    constructor(private savingService: SavingService) {}

    @Get('stable-products')
    getStableProducts(): Promise<any> {
        return this.savingService.getStableProducts();
    }
}
