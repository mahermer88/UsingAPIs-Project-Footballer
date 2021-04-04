import { createAndAppend } from "../helpers/creat-and-append.js";
import { filterMatchesUpDay } from "../handlers/fetch-matches-up-day.js";
import { resetElement } from "../helpers/reset-element.js";

export function renderSelectDays(competitionCode, currentMatchday) {
  const container = document.getElementById(`tables-container`);
  resetElement(container);

  const list = createAndAppend(`select`, container, {
    class: `col s2 m2 l2 list white black-text`,
  });
  const tableContainer = createAndAppend("div", container, {
    class: `col s9 m9 l9`,
    id: `table-container`,
  });
  if (!list.textContent) {
    createAndAppend(`option`, list, {
      content: `select Matchday`,
      disabled: `disabled`,
    });
    for (let i = 1; i <= currentMatchday; i++) {
      createAndAppend(`option`, list, {
        content: `${i}`,
        value: `${competitionCode}`,
      });
    }
  }
  list.addEventListener(`change`, () => {
    resetElement(tableContainer);

    const code = list[list.selectedIndex].value;
    const day = list[list.selectedIndex].textContent;
    filterMatchesUpDay(code, day);
  });
}
