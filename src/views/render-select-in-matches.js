import { createAndAppend } from "../helpers/creat-and-append.js";
import { renderError } from "./render-error.js";
import { renderSelectDays } from "../views/render-select-days.js"
import { resetElement } from "../helpers/reset-element.js"

export function renderSelectInMatches(availableCompetitions) {
  try {
    const competitionsList = document.getElementById("matches-list");
    competitionsList.classList.remove('hide')
    if (!competitionsList.textContent) {
      for (const competition of availableCompetitions) {
        createAndAppend("option", competitionsList, {
          text: `${competition.name}`,
          value: `${competition.code}`,
          id: `${competition.currentSeason.currentMatchday}`
        });
      }
    }
    competitionsList.onchange = () => {
      const matchesDaysList = document.getElementById("matches-days");
      resetElement(matchesDaysList)
      const container = document.getElementById("match-table-container");
      resetElement(container)

      const currentMatchdayCode = competitionsList[competitionsList.selectedIndex].value;
      const currentMatchday = competitionsList[competitionsList.selectedIndex].id;
      renderSelectDays(currentMatchdayCode, currentMatchday)
    };
  } catch (error) {
    renderError(error);
  }
}
