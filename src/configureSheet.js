import { GoogleSpreadsheet } from "google-spreadsheet";

const creds = require ('./bk-members.json')

// Config variables
const SPREADSHEET_ID = '1Whax6iFkFs5-kBm6PdbwJAAk_oDajr50Y5s2eVENJzY';

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