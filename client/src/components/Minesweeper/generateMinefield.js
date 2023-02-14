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
