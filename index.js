const table = document.querySelector("#tblbingo")
const letter = document.querySelectorAll(".letters-bingo")

const winningPositions = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24]
   ]

let arr = Array.apply(null, {length: 26}).map(Number.call, 
Number);

//arr.shift()

function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

   while(currentIndex != 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;

       [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], 
       arr[currentIndex]];
   }
 
   return arr;
}

let iterator = 0;

for (i = 0; i < 5; i++) {
    let tr = document.createElement("tr")
    table.appendChild(tr)

    for (j = 0; j < 5; j++) {
        let td = document.createElement("td")
        td.id = arr[iterator].toString()
        td.style.height = "20%"
        td.style.width = "20%"
        td.classList.add("main-table-cell")

        let div = document.createElement("div")
        div.classList.add("cell-format")
        div.textContent = arr[iterator].toString()
        td.appendChild(div)
        tr.appendChild(td)
        iterator++;
    }
}
const cell = document.querySelectorAll(".main-table-cell");
console.log('cell #1 >>> ', cell)

let winningIterator = 0
cell.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.add("strickout");

        if(mathcWin()) {
            console.log('letter >>> ', letter)
            console.log('winningIterator >>> ', winningIterator)
            console.log('letter[winningIterator] >>> ', letter[winningIterator])
            letter[winningIterator].classList.add("show-bingo");

            winningIterator++;
            if(winningIterator === 5) {
                alert('B I N G O');
            }
        }
    })
})

function mathcWin() {
    const cell = document.querySelectorAll(".main-table-cell");

    console.log('cell #2 >>> ', cell)
    console.log('winningPositions >>> ', winningPositions)

    return winningPositions.some(combination => {
        console.log('combination >>> ', combination)
        let ite = 0;
        combination.forEach(index => {
            console.log('cell[index] >>> ', cell[index])
            if(cell[index].classList.contains("strickout")) {
                ite++;
            }
        })

        if(ite === 5) {
            let indexWin = winningPositions.indexOf(combination);
            winningPositions.splice(indexWin, 1)
        }
        return combination.every(index => {
            return cell[index].classList.contains("strickout")
        })
    })
}

console.log(arr)