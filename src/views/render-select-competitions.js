import { renderError } from "./render-error.js";
import { createAndAppend } from "../helpers/creat-and-append.js";
import { renderCompetition } from "../views/render-table-competition.js"

export function renderCompetitions(availableCompetitions) {
  try {
    const competitionsList = document.getElementById("competitions-list");
    competitionsList.classList.remove('hide')
    if (!competitionsList.textContent) {
      for (const competition of availableCompetitions) {
        createAndAppend("option", competitionsList, {
          text: `${competition.name}`,
          value: `${availableCompetitions.indexOf(competition)}`,
        });
      }
    }
    competitionsList.onchange = () => {
      competitionsList.value =
        competitionsList[competitionsList.selectedIndex].value;
        renderCompetition(availableCompetitions[competitionsList.value]);
    };
  } catch (error) {
    renderError(error);
  }
}
