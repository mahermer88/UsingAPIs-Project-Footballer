import { renderError } from "../views/render-error.js";

export async function fetchData(url) {
  try {
    const dataSet = await fetch(url, {
      headers: {
        "X-Auth-Token": "c89a93e0de7149498f076227fd51daaf",
      },
    });
    const response = await dataSet.json();
    return response;
  } catch (error) {
    renderError(error);
  }
}
