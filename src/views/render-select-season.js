import { createAndAppend } from "../helpers/creat-and-append.js";
import { resetElement } from "../helpers/reset-element.js";
import { renderStanding } from "../views/render-table-standing.js";

export function renderSelectSeasons(standings) {
  const container = document.getElementById(`tables-container`);
  resetElement(container);

  const list = createAndAppend(`select`, container, {
    class: ` col s2 m2 l2 list white black-text`,
  });
  const tableContainer = createAndAppend(`div`, container, {
    class: `col s9 m9 l9`,
    id: `table-container`,
  });

  if (!list.textContent) {
    createAndAppend(`option`, list, {
      content: `select Season`,
      disabled: `disabled`,
    });
    for (const standing of standings) {
      createAndAppend(`option`, list, {
        content: `${standing.stage}-${standing.type}`,
        value: `${standings.indexOf(standing)}`,
      });
    }
  }
  list.addEventListener(`change`, () => {
    resetElement(tableContainer);

    const season = list[list.selectedIndex].value;
    renderStanding(standings, season);
  });
}
