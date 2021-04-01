import { createAndAppend } from "../helpers/creat-and-append.js";

export function createTable(container, label, headCells) {
    const table = createAndAppend("table", container, {
        id: label,
        class: `striped highlight deep-orange-text text-darken-4`
    });

    const head = createAndAppend("tr", table);
    for (const cell of headCells) {
        const headCell = createAndAppend("th", head, { text: cell, class: `center-align black-text`});
        headCell.style.border = `2px solid black`;
    }
    table.style.border = `2px solid black`;
    return table
}



export function addTableRow(container, rowCells) {
    const tr = createAndAppend("tr", container)
    for (const cell of rowCells) {
        const rowCell = createAndAppend("td", tr, { text: cell, class: `center-align` })
        rowCell.style.border = `2px solid black`;
    }
    return tr
}