import { styleDocumentWithMaterialize } from "../views/style-document-with-materialize.js";
import { fetchAvailableCompetitions } from "../handlers/fetch-available-competitions.js";
import { renderCompetitions } from "../views/render-select-competitions.js"
import { renderButtonInStandings } from "../views/render-buttons-in-standings.js"
import { renderSelectInMatches } from "../views/render-select-in-matches.js"

document.addEventListener("DOMContentLoaded", styleDocumentWithMaterialize);



document.getElementById("trigger-competitions").addEventListener("click", async () => {
    const competitions = await fetchAvailableCompetitions();
    renderCompetitions(competitions);
  });
  document.getElementById("trigger-standings").addEventListener("click", async () => {
    const competitions = await fetchAvailableCompetitions();
    renderButtonInStandings(competitions);
  });
  document.getElementById("trigger-matches").addEventListener("click", async () => {
    const competitions = await fetchAvailableCompetitions();
    renderSelectInMatches(competitions);
  });








