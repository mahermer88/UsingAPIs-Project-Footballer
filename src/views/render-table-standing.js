import { createAndAppend } from "../helpers/creat-and-append.js";
import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";

export function renderStanding(standings, season) {
  const standing = standings[season].table;

  const tableContainer = document.getElementById(`table-container`);
  const headCells = [
    `Pos`,
    `logo`,
    `Club`,
    `P`,
    `W`,
    `D`,
    `L`,
    `Points`,
    `GF`,
    `GA`,
    `GD`,
  ];
  const chosenClasses = `white orange-text text-darken-4`;
  const table = createTable(tableContainer, headCells, chosenClasses);

  for (const team of standing) {
    const standingInfo = [
      team.position,
      createAndAppend(`img`, null, {
        src: team.team.crestUrl,
        class: `logo`,
      }),
      team.team.name,
      team.playedGames,
      team.won,
      team.draw,
      team.lost,
      team.points,
      team.goalsFor,
      team.goalsAgainst,
      team.goalDifference,
    ];
    addTableRow(table, standingInfo);
  }
}
