export function bombIndexes() {
  let array1 = [];
  for (let i = 1; i < 11; i++) {
    let randomNumber = Math.floor(Math.random() * 81 + 1);
    if (i === 1) {
      array1.push(randomNumber);
    } else {
      if (array1.includes(randomNumber)) {
        i--;
      } else {
        array1.push(randomNumber);
      }
    }
  }
  return array1.sort((a, b) => a - b);
}

export function generateMinefield() {
  let bombs = bombIndexes();

  let array2 = [];
  for (let i = 1; i < 82; i++) {
    if (bombs.includes(i)) {
      array2.push("X");
    } else {
      array2.push(null);
    }
  }

  let row = 9;
  for (let i = 0; i < array2.length; i++) {
    let a = i - row;
    let b = i - row + 1;
    let c = i + 1;
    let d = i + row + 1;
    let e = i + row;
    let f = i + row - 1;
    let g = i - 1;
    let h = i - row - 1;
    let sum = 0;
    const x = i % row;
    const y = Math.floor(i / row);
    if (array2[i] === "X") {
      array2[i] = "X";
    } else {
      if (y > 0 && array2[a] === "X") {
        sum++;
      }
      if (y > 0 && x < row - 1 && array2[b] === "X") {
        sum++;
      }
      if (x < row - 1 && array2[c] === "X") {
        sum++;
      }
      if (x < row - 1 && y < row - 1 && array2[d] === "X") {
        sum++;
      }
      if (y < row - 1 && array2[e] === "X") {
        sum++;
      }
      if (y < row - 1 && x > 0 && array2[f] === "X") {
        sum++;
      }
      if (x > 0 && array2[g] === "X") {
        sum++;
      }
      if (x > 0 && y > 0 && array2[h] === "X") {
        sum++;
      }
      array2[i] = sum;
    }
  }
  return array2;
}

export function printMinefield(arr, row) {
  for (let i = 0; i < row; i++) {
    let line = "";
    for (let j = 0; j < row; j++) {
      line += arr[i * row + j];
    }
    console.log(line);
  }
}

export function generateUserField() {
  let arr = [];
  for (let i = 1; i < 82; i++) {
    arr.push("U");
  }
  return arr;
}

export function findReveals(index, minefield, userField, revealSoFar = []) {
  // Revealing the cell clicked by user

  revealSoFar.push(index);

  // If the clicked cell is a number, I will show only the number cell

  if (minefield[index] !== 0) {
    return [index];
  }

  // Preparation of x/y coordinates

  const row = 9;
  const x = index % row;
  const y = Math.floor(index / row);

  let a = index - row;
  let b = index - row + 1;
  let c = index + 1;
  let d = index + row + 1;
  let e = index + row;
  let f = index + row - 1;
  let g = index - 1;
  let h = index - row - 1;

  // surrounding - is an array with indexes of my surroundings
  let surrounding = [];
  if (y > 0) {
    surrounding.push(a);
  }

  if (y > 0 && x < row - 1) {
    surrounding.push(b);
  }

  if (x < row - 1) {
    surrounding.push(c);
  }

  if (x < row - 1 && y < row - 1) {
    surrounding.push(d);
  }

  if (y < row - 1) {
    surrounding.push(e);
  }
  if (y < row - 1 && x > 0) {
    surrounding.push(f);
  }
  if (x > 0) {
    surrounding.push(g);
  }
  if (x > 0 && y > 0) {
    surrounding.push(h);
  }

  //preventing infinite loop from happening
  //if we have already opened a cell, we do not check its surroundings

  surrounding = surrounding.filter((index) => {
    return !revealSoFar.includes(index);
  });

  //checking 8 cells of my surroundings for an empty cell
  // they will be eigher empty or numbers

  for (let i = 0; i < surrounding.length; i++) {
    if (userField[surrounding[i]] === "U") {
      let found = minefield[surrounding[i]];

      //if a cell of my surroundings is empty, i need to repeat a process for a new empty
      //Recursion
      if (found === 0) {
        revealSoFar = findReveals(
          surrounding[i],
          minefield,
          userField,
          revealSoFar
        );
      }

      //if a cell is a number, we just show it
      if (typeof found === "number" && found > 0) {
        revealSoFar.push(surrounding[i]);
      }
    }
  }
  return revealSoFar;
}
