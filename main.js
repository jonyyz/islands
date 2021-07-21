const map = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

function traverseIsland(x, y, island = []) {
  const row = map[y];
  const cell = row[x];

  // If it's not a land cell or we've already found this node return
  if (cell === 0 || island.find((coord) => coord.x === x && coord.y === y))
    return;

  island.push({ x, y });

  // Scan north
  if (y > 0) traverseIsland(x, y - 1, island);
  // Scan south
  if (y < map.length - 1) traverseIsland(x, y + 1, island);
  // Scan west
  if (x > 0) traverseIsland(x - 1, y, island);
  // Scan east
  if (x < row.length - 1) traverseIsland(x + 1, y, island);

  return island;
}

function printMap(map) {
  console.log("MAP:");
  console.log("---");
  for (let y = 0; y < map.length; ++y) {
    console.log(map[y].join(""));
  }
  console.log();
}

function findIslands(map) {
  printMap(map);
  const islands = [];

  for (let y = 0; y < map.length; ++y) {
    const row = map[y];
    for (let x = 0; x < row.length; ++x) {
      if (row[x] === 1) {
        if (
          islands.length > 0 &&
          islands.find((island) =>
            island.find((coord) => coord.x === x && coord.y === y)
          )
        )
          continue;
        islands.push(traverseIsland(x, y));
      }
    }
  }

  return islands;
}

const islands = findIslands(map);
console.log("ISLANDS FOUND:");
console.log(islands);
console.log();
console.log(`NUMBER OF ISLANDS: ${islands.length}`);
