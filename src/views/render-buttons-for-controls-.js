import { resetElement } from "../helpers/reset-element.js";
import { createAndAppend } from "../helpers/creat-and-append.js";
import { resetSelected } from "../helpers/reset-class.js";
import { fetchControl } from "../handlers/fetch-control.js";

export function renderControlsButton(competitionCode) {
  const appContainer = document.getElementById(`app-container`);
  const controlsButtons = createAndAppend(`div`, appContainer, {
    id: `controls-buttons`,
    class: `row`,
  });
  const tablesContainer = createAndAppend(`div`, appContainer, {
    id: `tables-container`,
    class: `row`,
  });

  const buttons = [`Info`, `Standing`, `Matches`, `Teams`];
  for (const button of buttons) {
    const btn = createAndAppend(`button`, controlsButtons, {
      content: `${button}`,
      class: `control-button col s3 m3 l3 btn waves-effect waves-light hoverable blue darken-3`,
      id: `trigger-${button}`,
    });

    btn.addEventListener(`click`, (e) => {
      resetSelected(`.control-button`, `darken-3`);
      resetElement(tablesContainer);

      const selectedButton = e.target;
      selectedButton.classList.add(`darken-3`);
      const control = selectedButton.id;
      fetchControl(competitionCode, control);
    });
  }
}
