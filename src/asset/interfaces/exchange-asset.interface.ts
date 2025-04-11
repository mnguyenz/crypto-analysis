import { AssetResponse } from '~asset/types/asset-response.type';
import { AccountEnum } from '~core/enums/exchanges.enum';

export interface IExchangeAsset {
    overview(account: AccountEnum): Promise<any>;
    details(account: AccountEnum): Promise<AssetResponse>;
}
