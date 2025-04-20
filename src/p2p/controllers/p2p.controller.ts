import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { P2PService } from '~p2p/services/p2p.service';

@Controller('p2p')
@ApiTags('P2P')
export class P2PController {
    constructor(private p2pService: P2PService) {}

    @Get('trades')
    getP2PTrades(): Promise<any> {
        return this.p2pService.getP2PTrades();
    }
}
