import { resetElement } from "../helpers/reset-element.js";
import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";

export function renderCompetition(competition) {
  const container = document.getElementById(`tables-container`);
  resetElement(container);

  const headCells = [
    `Name`,
    `Area`,
    `Current Matchday`,
    `Available Seasons`,
    `Last Update`,
  ];
  const chosenClasses = `col s9 m9 l10 offset-l1 white orange-text text-darken-4`;
  const table = createTable(container, headCells, chosenClasses);

  const competitionInfo = [
    competition.name,
    competition.area.name,
    competition.currentSeason.currentMatchday,
    competition.seasons.length,
    competition.lastUpdated.substr(0, 10),
  ];
  addTableRow(table, competitionInfo);
}
