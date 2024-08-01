// Factory function wrapped in an IIFE containing rows, columns, and the gameboard array.
const gameboard = (function () {
  const board = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];
  return { board };
})();

console.log(gameboard.board);
