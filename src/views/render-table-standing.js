import { resetElement } from "../helpers/reset-element.js"
import { createAndAppend } from "../helpers/creat-and-append.js";
import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";
import { renderError } from "./render-error.js";

export function renderStanding(competitionName, standing) {
  try {
    const standingTableContainer = document.getElementById("standing-table-container")
    resetElement(standingTableContainer)
       
    const h4 = createAndAppend('h4', standingTableContainer, {
      text: `${competitionName}`,
      class: `center-align deep-orange-text text-darken-4` 
    })

    const headCells = ['Pos', 'Club', 'P', 'W', 'D', 'L', 'Points', 'GF', 'GA', 'GD']
    const table = createTable(standingTableContainer, `standing-table`, headCells)
  
    for (const team of standing) {
      const standingInfo = [
        team.position,
        team.team.name,
        team.playedGames,
        team.won,
        team.draw,
        team.lost,
        team.points,
        team.goalsFor,
        team.goalsAgainst,
        team.goalDifference
      ];
      addTableRow(table, standingInfo)
    }
  } catch (error) {
    renderError(error);
  }
}
