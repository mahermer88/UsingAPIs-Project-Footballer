import { fetchData } from "../handlers/fetch-data.js";
import { renderMatch } from "../views/render-table-matches.js";
import { renderError } from "../views/render-error.js";

export async function filterMatchesUpDay(code, day) {
  try {
    const url = `http://api.football-data.org/v2/competitions/${code}/matches/?matchday=${day}`;
    const data = await fetchData(url);
    const matches = data.matches;
    renderMatch(matches);
  } catch (error) {
    renderError(error);
  }
}
