import { fetchData } from "./fetch-data.js";
import { renderError } from "../views/render-error.js";

export async function fetchAvailableSources() {
  try {
    const url = `https://api.football-data.org/v2/competitions/`;
    const data = await fetchData(url);
    const competitions = data.competitions;
    const availableSources = [
      23,
      45,
      46,
      49,
      50,
      57,
      66,
      81,
      94,
      108,
      129,
      151,
    ];
    const availableCompetitions = competitions.filter((competition, index) => {
      return availableSources.includes(index);
    });
    return availableCompetitions;
  } catch (error) {
    renderError(error);
  }
}
