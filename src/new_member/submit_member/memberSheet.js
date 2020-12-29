import configureSheet, {doc} from '../../configureSheet'


const appendSpreadsheet = async (row) => {
  try {
    configureSheet()
    await doc.loadInfo();
    const sheet = doc.sheetsById[1620250739];
    await sheet.addRow(row);

  } catch (e) {
    console.error('Error: ', e);
  }
};

export default appendSpreadsheet;
