// console.log("Hello WU23");

// const demo = document.querySelector("#demo");
// const myButton = document.createElement("button");
// myButton.textContent = "my button";
// demo.appendChild(myButton);

const demo = document.querySelector("#chessboard");

for (let i = 0; i < 8; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add(i % 2 === 0 ? "even" : "odd");
  demo.appendChild(row);
  for (let j = 0; j < 8; j++) {
    const col = document.createElement("div");
    col.classList.add("col");
    if (row.classList.contains("even")) {
      col.classList.add(j % 2 === 0 ? "white" : "black");
    } else {
      col.classList.add(j % 2 === 0 ? "black" : "white");
    }

    if (j === 0) {
      const number = document.createElement("span");
      number.classList.add("number");
      let num = 8 - i;
      number.textContent = `${num}`;
      col.appendChild(number);
    }

    if (i === 7) {
      const letter = document.createElement("span");
      letter.classList.add("letter");
      const alfa = ["A", "B", "C", "D", "E", "F", "G", "H"];
      letter.textContent = alfa[j];
      col.appendChild(letter);
    }

    col.addEventListener("click", function (event) {
      event.currentTarget.classList.toggle("bg-purple");
    });

    row.appendChild(col);
  }
}

let zoomLevel = 1;

document.getElementById("reset").addEventListener("click", function (click) {
  document.querySelector("#chessboard").style.transform = `scale(1)`;
});

window.addEventListener("keypress", function (event) {
  if (event.key === "+") {
    if (zoomLevel < 1.1) {
      zoomLevel += 0.1;
    }
  } else if (event.key === "-") {
    if (zoomLevel > 0.6) {
      zoomLevel -= 0.1;
    }
  }

  document.querySelector("#chessboard").style.transform = `scale(${zoomLevel})`;

  const zooms = document.querySelector("#zoom-lvl");
  zooms.textContent = `Current zoom: ${Math.floor(zoomLevel * 100)} %`;
});
