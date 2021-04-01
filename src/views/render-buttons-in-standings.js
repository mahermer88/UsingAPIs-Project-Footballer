import { renderError } from "./render-error.js";
import { createAndAppend } from "../helpers/creat-and-append.js";
import { fetchAvailableStandings } from "../handlers/fetch-available-standings.js";

export function renderButtonInStandings(availableCompetitions) {
  try {
    const standingsButtons = document.getElementById("standings-buttons");
    if (!standingsButtons.textContent) {
      for (const competition of availableCompetitions) {
        createAndAppend("button", standingsButtons, {
          text: `${competition.name}`,
          class: `btn`,
          value: `${competition.code}`,
        });
      }
    }
    standingsButtons.addEventListener("click", fetchAvailableStandings);
  } catch (error) {
    renderError(error);
  }
}
