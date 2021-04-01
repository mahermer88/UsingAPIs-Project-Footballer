import { resetElement } from "../helpers/reset-element.js"
import { createAndAppend } from "../helpers/creat-and-append.js";
import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";
import { renderError } from "./render-error.js";


export function renderCompetition(competition) {
  try {
    const competitionTableContainer = document.getElementById("competition-table-container")
    resetElement(competitionTableContainer)

    const h4 = createAndAppend('h4', competitionTableContainer, {
      text: `${competition.name}`,
      class: `center-align deep-orange-text text-darken-4`
    })
    const headCells = ['Name', 'Area', 'Current Match day', 'Last Update']
    const table = createTable(competitionTableContainer, `competition-table`, headCells)

    const competitionInfo = [
      competition.name,
      competition.area.name,
      competition.currentSeason.currentMatchday,
      competition.lastUpdated.substr(0, 10),
    ];
    addTableRow(table, competitionInfo)

  } catch (error) {
    renderError(error);
  }
}
