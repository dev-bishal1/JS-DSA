/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = (board) => {
  const rows = new Array(9);
  const cols = new Array(9);
  const boxes = new Array(9);

  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    boxes[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== ".") {
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
          return false;
        }

        rows[i].add(num);
        cols[j].add(num);
        boxes[boxIndex].add(num);
      }
    }
  }

  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
