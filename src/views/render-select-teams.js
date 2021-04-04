import { createAndAppend } from "../helpers/creat-and-append.js";
import { fetchAvailablePlayers } from "../handlers/fetch-available-players.js";
import { resetElement } from "../helpers/reset-element.js";

export function renderSelectTeams(teams) {
  const container = document.getElementById(`tables-container`);
  resetElement(container);

  const list = createAndAppend(`select`, container, {
    class: `col s3 m2 l2 list white black-text`,
  });
  const teamCard = createAndAppend(`div`, container, {
    class: `col s8 m3 l3`,
    id: `team-card`,
  });
  const tableContainer = createAndAppend(`div`, container, {
    class: `col s12 m6 l6`,
    id: `table-container`,
  });

  if (!list.textContent) {
    createAndAppend(`option`, list, {
      content: `select team`,
      disabled: `disabled`,
    });
    for (const team of teams) {
      createAndAppend(`option`, list, {
        content: `${team.name}`,
        value: `${team.id}`,
      });
    }
  }
  list.addEventListener(`change`, () => {
    resetElement(teamCard);
    resetElement(tableContainer);

    const teamId = list[list.selectedIndex].value;
    fetchAvailablePlayers(teamId);
  });
}
