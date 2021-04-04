import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";

export async function renderMatch(matches) {
  const tableContainer = document.getElementById(`table-container`);
  const headCells = [`Home`, `Score`, `Away`];
  const chosenClasses = `white orange-text text-darken-4`;
  const table = createTable(tableContainer, headCells, chosenClasses);

  for (const match of matches) {
    const matchInfo = [
      match.homeTeam.name,
      `${match.score.fullTime.homeTeam}  -  ${match.score.fullTime.awayTeam}`,
      match.awayTeam.name,
    ];
    addTableRow(table, matchInfo);
  }
}
