import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssetService } from '~asset/services/asset.service';
import { AssetResponse } from '~asset/types/asset-response.type';

@Controller('assets')
@ApiTags('Assets')
export class AssetController {
    constructor(private assetService: AssetService) {}

    @Get('overview')
    overview(): Promise<any> {
        return this.assetService.overview();
    }

    @Get('details')
    details(): Promise<AssetResponse> {
        return this.assetService.details();
    }
}
