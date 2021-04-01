import { fetchData } from "../helpers/fetch-data.js"
import { renderMatch } from "../views/render-table-matches.js"

export async function filterMatchesUpDay(code, day) {

    const url = `http://api.football-data.org/v2/competitions/${code}/matches/?matchday=${day}`
    const data = await fetchData(url);  
    const matches = data.matches;
    renderMatch(matches)
} 


