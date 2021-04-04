import { creatSlider } from "../helpers/creat-slider.js";
import { styleDocumentWithMaterialize } from "../helpers/style-document-with-materialize.js";
import { fetchAvailableSources } from "../handlers/fetch-available-sources.js";
import { renderCompetitionsButtons } from "../views/render-buttons-of-competitions.js";

document.addEventListener(`DOMContentLoaded`, creatSlider);
document.addEventListener(`DOMContentLoaded`, styleDocumentWithMaterialize);

document.addEventListener(`DOMContentLoaded`, async () => {
  const competitions = await fetchAvailableSources();
  renderCompetitionsButtons(competitions);
});
