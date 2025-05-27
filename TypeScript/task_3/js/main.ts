import * as CRUD from './crud';
import { RowID, RowElement } from './interface';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert and update a row
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 25 };

// Delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
