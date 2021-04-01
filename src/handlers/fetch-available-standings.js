import { fetchData } from "../helpers/fetch-data.js"
import {renderStanding} from "../views/render-table-standing.js"

export async function fetchAvailableStandings(event) {
    const selectedButton = event.target
    const competitionName = selectedButton.textContent
    const url = `https://api.football-data.org/v2/competitions/${selectedButton.value}/standings`;
    const data = await fetchData(url);
    const standing = data.standings[0].table; //choose last season
    renderStanding(competitionName, standing)
} 


