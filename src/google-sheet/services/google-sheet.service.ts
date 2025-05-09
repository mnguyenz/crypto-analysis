import { Injectable, Logger } from '@nestjs/common';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import { env } from '~config/env.config';

@Injectable()
export class GoogleSheetService {
    private sheets;
    private jwtClient: JWT;
    private logger = new Logger(GoogleSheetService.name);

    constructor() {
        this.jwtClient = new google.auth.JWT(
            env.GOOGLE.CLIENT_EMAIL,
            undefined,
            env.GOOGLE.PRIVATE_KEY.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        this.sheets = google.sheets({ version: 'v4', auth: this.jwtClient });
    }

    async batchUpsert(spreadsheetId: string, batchRequests: any[]): Promise<void> {
        await this.jwtClient.authorize();

        try {
            const requestBody = {
                data: batchRequests,
                valueInputOption: 'RAW' // Use 'RAW' for raw value input, or 'USER_ENTERED' for formulas etc.
            };

            const response = await this.sheets.spreadsheets.values.batchUpdate({
                spreadsheetId,
                requestBody
            });

            this.logger.log(
                `Batch upsert successful for ${spreadsheetId}. Updated ${response.data.totalUpdatedCells} cells.`
            );
        } catch (error) {
            this.logger.error('Failed to batch upsert rows:', error);
            throw error;
        }
    }
}
