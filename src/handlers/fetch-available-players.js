import { fetchData } from "./fetch-data.js";
import { renderError } from "../views/render-error.js";
import { renderTeam } from "../views/render-table-teams.js";

export async function fetchAvailablePlayers(teamId) {
  try {
    const url = `https://api.football-data.org/v2/teams/${teamId}/`;
    const data = await fetchData(url);
    renderTeam(data);
  } catch (error) {
    renderError(error);
  }
}
