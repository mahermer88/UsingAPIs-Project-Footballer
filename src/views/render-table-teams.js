import { createTable } from "../helpers/creat-table.js";
import { addTableRow } from "../helpers/creat-table.js";
import { createCard } from "../helpers/creat-card.js";

export async function renderTeam(teamData) {
  const teamCard = document.getElementById(`team-card`);
  createCard(
    teamCard,
    teamData.crestUrl,
    teamData.name,
    teamData.venue,
    teamData.website
  );
  const squad = teamData.squad;
  const triggerPlayers = document.getElementById(`trigger-players`);
  if (!squad.length) {
    triggerPlayers.classList.add("disabled");
  }
  triggerPlayers.addEventListener(`click`, () => {
    const tableContainer = document.getElementById(`table-container`);
    const headCells = [`Name`, `Nation`, `Position`];
    const chosenClasses = `white orange-text text-darken-4`;
    const table = createTable(tableContainer, headCells, chosenClasses);
    for (const player of squad) {
      const playerInfo = [player.name, player.nationality, player.position];
      addTableRow(table, playerInfo);
    }
  });
}
