var gridArray = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]


const player1 = 1;
const player2 = 2;
let currentPlayer = 1;

// Making the grid 
function makeGrid() {
    var gridWrap = document.getElementById('gridwrap');

    for (let i=0; i<gridArray.length; i++) {
        let row = gridArray[i];
        var rows = document.createElement('div');
        rows.className = "row";
        rows.setAttribute('id', 'row' + String(i));
        gridWrap.appendChild(rows);

        for (let j= 0;j<row.length; j++) {
            let cell = row[j];

            var cellls = document.createElement('div');
            cellls.className ="buttonContainer";
            cellls.setAttribute('id', String(i) + String(j));
            rows.appendChild(cellls);
        }
    }
}

//making thte click function work on the grid
function clickHandler() {
    var cells = document.getElementsByClassName('buttonContainer');

    for (let i=0;i<cells.length; i++) {
    cells[i].addEventListener('click', click);
    }
}

//function to check the winner
const edgeX = gridArray[0].length - 2;
const edgeY = gridArray.length - 3;

function winCheck() {
    for (let i=0; i < gridArray.length; i++) { //i is the rows

        for (let j=0;j < edgeX; j++){   //j is each cell in row
            let cell = gridArray[i][j]; 

                
                

            if(cell !== 0) { 
                if(cell === (gridArray[i] || [])[j+1] && cell === (gridArray[i] || [])[j+2] && cell === (gridArray[i] || [])[j+3]) {
                    alert('Player'+' '+currentPlayer+' wins!');
                } 
            }
        }
    }
    // iterate each row   
for(let y = 0; y < edgeY; y++){

    // iterate each cell in the row
    for(let x = 0; x < gridArray[0].length; x++) {
      cell = gridArray[y][x];
      
      // Only check if cell is filled
      if(cell !== 0) {
        
        // Check the next two cells for the same value
        if(cell === (gridArray[y+1] || [])[x] && cell === (gridArray[y+2] || []) [x] && cell === (gridArray[y+3] || [])[x]){
            alert('Player'+' '+currentPlayer+' wins!');
        }
      }
    }
  }
  // DIAGONAL (DOWN RIGHT)
// iterate each row   
for(let y = 0; y < edgeY; y++){

    // iterate each cell in the row
    for(let x = 0; x < edgeX; x++) {
      cell = gridArray[y][x];
      
      // Only check if cell is filled
      if(cell !== 0) {
        
        // Check the next two cells for the same value
        if(cell === (gridArray[y+1] || [])[x+1] && cell === (gridArray[y+2] ||[]) [x+2] && cell === (gridArray[y+3] || [])[x+3] ) {
            alert('Player'+' '+currentPlayer+' wins!');
        }
      }
    }
  }
  // DIAGONAL (DOWN LEFT)
// iterate each row   
for(let y = 2; y < gridArray.length; y++){

    // iterate each cell in the row
    for(let x = 0; x < edgeX; x++) {
      cell = gridArray[y][x];
      
      // Only check if cell is filled
      if(cell !== 0) {
        
        // Check the next two cells for the same value
        if(cell === (gridArray[y-1] || [])[x+1] && cell === (gridArray[y-2] || [])[x+2] && cell === (gridArray[y-3] || [])[x+3] ) {
            alert('Player'+' '+currentPlayer+' wins!');
        }
      }
    }
  }
}
console.log(gridArray);

//what happens when clicked
function click(event){
//dropping buttons to open bottom row when clicked
    for (let i=gridArray.length-1;i>=0;i--) {   //cycle through rows
        for (let j=gridArray[i].length-1;j>=0;j--){     //cycle through each cell in each row
            if (String(j) === event.target.id[1]) { 
                let currentCell=document.getElementById(String(i) + String(j));
                if (currentCell.innerHTML ==='') {
                    let button = document.createElement('div');

                    //swtiching each turn between red and black
                    if (currentPlayer === player1) {
                        currentPlayer = player2; 
                        button.classList.add('red');
                    } else {
                        currentPlayer = player1; 
                        button.classList.add('black');
                    }
                    
                    button.classList.add('circle');
                    currentCell.appendChild(button);

                    gridArray[i][j] = currentPlayer;
                   
                    
                    winCheck();

                    return;
                }
            }
        }
    }
}



makeGrid();
clickHandler();
