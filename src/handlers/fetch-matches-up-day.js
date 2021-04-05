import { fetchData } from "../handlers/fetch-data.js";
import { renderMatch } from "../views/render-table-matches.js";
import { renderError } from "../views/render-error.js";

export async function filterMatchesUpDay(code, day) {
  try {
    console.log(code, day)
    const url = `http://api.football-data.org/v2/competitions/${code}/matches/?matchday=${day}`;
    console.log(url)
    const data = await fetchData(url);
    console.log(data)
    const matchesList = await data.matches;
     console.log(matchesList)
    renderMatch(matchesList);
  } catch (error) {
    renderError(error);
  }
}

