import { createAndAppend } from "../helpers/creat-and-append.js";

export function createCard(parent, logo, title, Stadium, Website) {
  const card = createAndAppend(`div`, parent, {
    class: `card orange-text text-darken-4 center-align`,
  });
  const cardImage = createAndAppend(`div`, card, {
    class: `card-image center-align`,
  });
  const img = createAndAppend(`img`, cardImage, {
    src: logo,
    height: `120px`,
  });

  const cardTitle = createAndAppend(`div`, card, {
    content: title,
    class: `card-title center-align`,
  });

  const cardContent = createAndAppend(`div`, card, {
    class: `card-content grey lighten-4 center-align`,
  });

  const content1 = createAndAppend(`p`, cardContent, {
    content: `Stadium: ${Stadium}`,
  });

  const content2 = createAndAppend(`a`, cardContent, {
    href: Website,
    content: `Team - Website`,
  });

  const cardAction = createAndAppend(`div`, card, {
    class: `card-action center-align`,
  });
  const button = createAndAppend(`button`, cardAction, {
    content: `Players`,
    id: `trigger-players`,
    class: `btn halfway-fab waves-effect waves-light orange darken-4`,
  });

  return card;
}
