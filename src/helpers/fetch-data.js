export async function fetchData(url) {
  const dataSet = await fetch(url, {
    headers: {
      "X-Auth-Token": "c89a93e0de7149498f076227fd51daaf",
    },
  });
  const response = await dataSet.json();
  return response;
}
