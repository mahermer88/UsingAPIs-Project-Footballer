import { createAndAppend } from "../helpers/creat-and-append.js";
import { renderError } from "./render-error.js";
import { filterMatchesUpDay } from "../handlers/fetch-matches-up-day.js";

export function renderSelectDays(currentMatchdayCode, currentMatchday) {
  try {
    const matchesDaysList = document.getElementById("matches-days");
    matchesDaysList.classList.remove('hide')
    if (!matchesDaysList.textContent) {
      for (let i = 0; i <= currentMatchday; i++) {
        createAndAppend("option", matchesDaysList, {
          text: `${i}`,
          value: `${currentMatchdayCode}`,
        });
      }
    }
    matchesDaysList.onchange = () => {
      const code = matchesDaysList[matchesDaysList.selectedIndex].value;
      const day = matchesDaysList[matchesDaysList.selectedIndex].textContent;
      filterMatchesUpDay(code, day);
    };
  } catch (error) {
    renderError(error);
  }
}
