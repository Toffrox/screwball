import { GoogleSpreadsheet } from "google-spreadsheet";

const creds = require ('./bk-members.json')

// Config variables
const SPREADSHEET_ID = '1L7-qEKxTZVPIHC2RKZflF6kRNJqQy0AF1CJ5zppLMQk';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const configureSheet = async () =>
{
    try {
        await doc.useServiceAccountAuth(creds);
    } 
    catch (e) {
        console.error('Error: ', e);
    }

}

export {doc}
export default configureSheet;