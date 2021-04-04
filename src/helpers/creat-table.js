import { createAndAppend } from "../helpers/creat-and-append.js";

export function createTable(container, headCells, chosenClasses) {
  const table = createAndAppend(`table`, container, {
    class: chosenClasses,
  });
  table.style.border = `2px solid black`;

  const head = createAndAppend(`tr`, table);
  for (const cell of headCells) {
    const headCell = createAndAppend(`th`, head, {
      content: cell,
      class: `center-align black-text`,
    });
    headCell.style.border = `2px solid black`;
  }
  return table;
}

export function addTableRow(container, rowCells) {
  const tr = createAndAppend(`tr`, container);
  for (const cell of rowCells) {
    const rowCell = createAndAppend(`td`, tr, {
      content: cell,
      class: `center-align`,
    });
    rowCell.style.border = `1px solid grey`;
  }
  return tr;
}
