import { createAndAppend } from "../helpers/creat-and-append.js";
export function creatSlider() {
  const slider = document.getElementById(`slider`);
  const slides = createAndAppend(`ul`, slider, {
    class: `slides`,
  });

  const align = [`center-align`, `left-align`, `right-align`, `center-align`];
  const titleText = [`Competitions`, `Standings`, `Matches`, `Teams`];
  const secondText = [
    `Best competitions in the world.`,
    `teams, positions, points`,
    `All games day by day.`,
    `All squad and stuff..`,
  ];
  const buttonText = [
    `Start Your Journey With Us`,
    `Take A Look`,
    `Recent Results`,
    `More About Teams`,
  ];

  for (let i = 0; i < titleText.length; i++) {
    const li = createAndAppend(`li`, slides, {});
    const img = createAndAppend(`img`, li, {
      src: `media/back${i}.jpg`,
      alt: `background-image`,
      class: `responsive-img`,
    });
    const caption = createAndAppend(`div`, li, {
      class: `caption ${align[i]}`,
    });
    const h2 = createAndAppend(`h2`, caption, {
      content: `${titleText[i]}`,
      class: `yellow-text text-accent-2`,
    });
    const h4 = createAndAppend(`h4`, caption, {
      content: `${secondText[i]}`,
      class: `yellow-text text-accent-2 hide-on-small-only`,
    });
    const a = createAndAppend(`a`, caption, {
      content: `${buttonText[i]}`,
      class: `btn initial orange darken-4 waves-effect waves-light hoverable`,
    });
  }
}
