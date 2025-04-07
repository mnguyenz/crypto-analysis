import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EarnService } from '~earn/services/earn.service';

@Controller('earn')
@ApiTags('Earn')
export class EarnController {
    constructor(private earnService: EarnService) {}

    @Get('bonus-and-current-amount')
    getBonusAndCurrentAmount(): Promise<any> {
        return this.earnService.getBonusAndCurrentAmount();
    }
}
