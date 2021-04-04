import { fetchData } from "./fetch-data.js";
import { renderCompetition } from "../views/render-table-competition.js";
import { renderSelectSeasons } from "../views/render-select-season.js";
import { renderSelectDays } from "../views/render-select-days.js";
import { renderSelectTeams } from "../views/render-select-teams.js";
import { renderError } from "../views/render-error.js";

export async function fetchControl(competitionCode, control) {
  try {
    switch (control) {
      case `trigger-Info`:
        const url = `https://api.football-data.org/v2/competitions/${competitionCode}`;
        const data = await fetchData(url);
        renderCompetition(data);
        break;
      case `trigger-Standing`:
        const urlStandings = `https://api.football-data.org/v2/competitions/${competitionCode}/standings`;
        const dataStandings = await fetchData(urlStandings);
        const standings = dataStandings.standings;
        renderSelectSeasons(standings);
        break;
      case `trigger-Matches`:
        const urlMatches = `https://api.football-data.org/v2/competitions/${competitionCode}/`;
        const dataMatches = await fetchData(urlMatches);
        const currentMatchday = dataMatches.currentSeason.currentMatchday;
        renderSelectDays(competitionCode, currentMatchday);
        break;
      case `trigger-Teams`:
        const urlTeams = `https://api.football-data.org/v2/competitions/${competitionCode}/teams/`;
        const dataTeams = await fetchData(urlTeams);
        const teams = dataTeams.teams;
        renderSelectTeams(teams);
        break;
    }
  } catch (error) {
    renderError(error);
  }
}
