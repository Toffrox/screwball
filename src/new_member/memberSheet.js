import { GoogleSpreadsheet } from "google-spreadsheet";


const creds = require ('./../bk-members.json')

// Config variables
const SPREADSHEET_ID = '1Whax6iFkFs5-kBm6PdbwJAAk_oDajr50Y5s2eVENJzY';
const SHEET_ID = 0;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth(creds);
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};

export default appendSpreadsheet;
