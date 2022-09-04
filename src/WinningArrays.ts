let SIZE = 3;

//HORIZONTAL

let horizontalArrays = new Array(SIZE);
for (let i = 0; i < horizontalArrays.length; i++) {
  horizontalArrays[i] = new Array(SIZE);
}

let horizontalArrayElement = 0;

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    horizontalArrays[i][j] = horizontalArrayElement++;
  }
}

//VERTICAL

let verticalArrays = new Array(SIZE);
for (let i = 0; i < verticalArrays.length; i++) {
  verticalArrays[i] = new Array(SIZE);
}

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    let verticalArrayElement = i + j * SIZE;
    verticalArrays[i][j] = verticalArrayElement;
  }
}

// DIAGONALS

let firstDiagonalArray = new Array(2);

for (let i = 0; i < SIZE; i++) {
  let firstDiagonalArrayElement = i * (SIZE + 1);
  firstDiagonalArray[i] = firstDiagonalArrayElement;
}

let secondDiagonalArray = new Array(2);

for (let i = 0; i < SIZE; i++) {
  let secondDiagonalArrayElement = (SIZE - 1) * i + (SIZE - 1);
  secondDiagonalArray[i] = secondDiagonalArrayElement;
}

//ARRAY OF ALL ARRAYS

let WinningArrays = horizontalArrays.concat(
  verticalArrays,
  [firstDiagonalArray],
  [secondDiagonalArray]
);

export default WinningArrays;
