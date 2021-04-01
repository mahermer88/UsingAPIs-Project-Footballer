import { resetElement } from "../helpers/reset-element.js"
import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";
import { renderError } from "../views/render-error.js";

export async function renderMatch(matches) {
  try {
    const matchTableContainer = document.getElementById("match-table-container");
    resetElement(matchTableContainer)
   
    const headCells = ["Home", "Score", "Away"];
    const table =  createTable(matchTableContainer, `match-table`, headCells);
   

    for (const match of matches) {
      const matchInfo = [
        match.homeTeam.name,
        `${match.score.fullTime.homeTeam}  -  ${match.score.fullTime.awayTeam}`,
        match.awayTeam.name,
      ];
     addTableRow(table, matchInfo);
    }

  } catch (error) {
    console.log(error)
    renderError(error);
  }
}
