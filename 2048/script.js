const table = document.getElementById("table");
const arrayVal = Array.from({ length: 4 }, () => new Array(4).fill(null));
const arrayBool = Array.from({ length: 4 }, () => new Array(4).fill(false)); 
const arraySwitch = Array.from({ length: 4 }, () => new Array(4).fill(false)); 

function main() {
    let x, y;

    
    console.log(arrayVal); // Log the correct variable
    
    //arrayVal[y][x]
    //arrayVal[0][2] = 1;
    //update();

    // Starting random position
    for (let i = 0; i < 2; i++) {
        x = getRandom();
        y = getRandom();

        // Check if the position is null
        if (arrayVal[x][y] === null) {
            arrayVal[x][y] = 2; // Set value at random position
        } else {
            i--; // Decrement i to retry if position is occupied
        }
    }
    update(); // Call update to show the changes
}

function getRandom() {
    return Math.floor(Math.random() * 4); // Random number from 0 to 3
}

function update() {
    for (let i = 0; i < 4; i++) { // Loop through 4 rows
        for (let j = 0; j < 4; j++) { // Loop through 4 columns
            // Display empty string if null
            table.rows[i].cells[j].innerText = arrayVal[i][j] !== null ? arrayVal[i][j] : ''; 
        }
    }
}

function boolReset() {
    for (let i = 0; i < 4; i++) { // Loop through 4 rows
        for (let j = 0; j < 4; j++) {
            arrayBool[i][j] = false; // Reset boolean array
        }
    }
}

// Call main to initialize the table
main();

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            up();
            break;
        case 'ArrowDown':
            down();
                break;
        case 'ArrowLeft':
            left();
            break;
        case 'ArrowRight':
            right();
            break;  
    }
});

function up(){
    for(var j = 1; j < 4; j++){
        for(var i = 0; i < 4; i++){
            if(arrayVal[j][i] != null){
                //Row above
                if(arrayVal[j-1][i] == null){
                    //if row towards edge is null
                    var tempVal = arrayVal[j][i];
                    arrayVal[j][i] = null;
                    arrayVal[j-1][i] = tempVal;
                    
                    arrayBool

                } else {
                    //if row towards edge is not null
                    //Only combine nothing has combined there yet
                    //if they're the same, combine
                    if(arraySwitch[j-1][i] != true){
                        if(arrayVal[j-1][i] == arrayVal[j][i]){
                            arrayVal[j-i][i] *= 2;
                            arrayVal[j][i] = null;
                            arraySwitch[j-1][i] = true;
                        }
                    }
                    //if not, stop
                    else{

                    }

                }
            }
        }
    }
}

function down(){

}

function left(){

}

function right(){

}