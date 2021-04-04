import { createAndAppend } from "../helpers/creat-and-append.js";
import { resetSelected } from "../helpers/reset-class.js";
import { resetElement } from "../helpers/reset-element.js";
import { renderControlsButton } from "./render-buttons-for-controls-.js";

export function renderCompetitionsButtons(availableCompetitions) {
  const CompetitionsButtons = document.getElementById(`competitions-buttons`);

  for (const competition of availableCompetitions) {
    const col = createAndAppend(`div`, CompetitionsButtons, {
      class: `col s4 m2 l1 center-align white`,
    });
    const img = createAndAppend(`img`, col, {
      src: `media/${competition.code}.JPG`,
      class: `card competition-button hoverable`,
      height: `150px`,
      id: competition.code,
    });

    img.addEventListener(`click`, (event) => {
      resetSelected(`.competition-button`, `selected`);
      const appContainer = document.getElementById(`app-container`);
      resetElement(appContainer);

      const selectedCompetition = event.target;
      selectedCompetition.classList.add(`selected`);
      const competitionCode = selectedCompetition.id;
      renderControlsButton(competitionCode);
    });
  }
}
