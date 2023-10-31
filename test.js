function goRight(matrix, i, j, result) {
  while (j <= length) {
    result.push(matrix[i][j]);
    j++;
  }
  return result;
}

function goDown(matrix, i, j, result) {
  while (i < matrix.length) {
    result.push(matrix[i][j]);
    i++;
  }
  return result;
}

const walkMatrix = (matrix) => {
  // Your solution here
  let lastColumnTracker = matrix.length - 1;
  let firstColumnTracker = 0;
  const result = [];
  let length = matrix.length - 1;
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length; j++) {
      if (i == j) {
        result = goRight(matrix, i, j, result);
      }
      if (j == length) {
        goDown(matrix, i, j, result);
      }
    }
  }
  console.log(result);
};

const matrix = [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6],
];

//walkMatrix(matrix);

console.log(matrix[0][5]);
