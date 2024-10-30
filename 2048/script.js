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

function newRandom(){
    x = getRandom();
    y = getRandom();

    // Check if the position is null
    if (arrayVal[x][y] === null) {
        arrayVal[x][y] = 2; // Set value at random position
    } else {
        i--; // Decrement i to retry if position is occupied
    }
    update(); // Call update to show the changes
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
    for (let i = 0; i < 4; i++) { // Loop through 4 rows
        for (let j = 0; j < 4; j++) {
            arraySwitch[i][j] = false; // Reset boolean array
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait() {
    await sleep(2000);
    
}

function up(){
    boolReset();
    //animate up 3 times max
    for(var k = 0; k < 3; k++){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            //Current NOT NULL
            if(arrayVal[j][i] != null){
                //NEXT NULL
                if(arrayVal[j-1][i] == null){
                    var tempVal = arrayVal[j][i];
                    arrayVal[j][i] = null;
                    arrayVal[j-1][i] = tempVal;

                } else { // NEXT NOT NULL
                    //CHECK COMBINE
                    if(arraySwitch[j-1][i] == false){
                        //COMBINE
                        if(arrayVal[j-1][i] == arrayVal[j][i]){
                            arrayVal[j-1][i] *= 2;
                            arrayVal[j][i] = null;
                            arraySwitch[j-1][i] = true;
                            
                            arrayBool[j][i] = true;
                        }
                    }
                    //Can't Combine
                    else{
                        
                    }

                }
            }
        }
    }

    update();
    wait();
    }
    //Should only random if can move or combine FIX!!!!!!!!!!!!!!!!!!!!!!!
    newRandom();
    
}

function down(){
    boolReset();
    //animate down 3 times max
    for(var k = 0; k < 3; k++){
    for(var i = 0; i < 4; i++){
        for(var j = 2; j >= 0; j--){
            //Current NOT NULL
            if(arrayVal[j][i] != null){
                //NEXT NULL
                if(arrayVal[j+1][i] == null){
                    var tempVal = arrayVal[j][i];
                    arrayVal[j][i] = null;
                    arrayVal[j+1][i] = tempVal;

                } else { // NEXT NOT NULL
                    //CHECK COMBINE
                    if(arraySwitch[j+1][i] == false){
                        //COMBINE
                        if(arrayVal[j+1][i] == arrayVal[j][i]){
                            arrayVal[j+1][i] *= 2;
                            arrayVal[j][i] = null;
                            arraySwitch[j+1][i] = true;
                            
                            arrayBool[j][i] = true;
                        }
                    }
                    //Can't Combine
                    else{
                        
                    }

                }
            }
        }
    }

    update();
    wait();
    }
}

function left(){
    boolReset();
    //animate up 3 times max
    for(var k = 0; k < 3; k++){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            //Current NOT NULL
            if(arrayVal[j][i] != null){
                //NEXT NULL
                if(arrayVal[j][i-1] == null){
                    var tempVal = arrayVal[j][i];
                    arrayVal[j][i] = null;
                    arrayVal[j][i-1] = tempVal;

                } else { // NEXT NOT NULL
                    //CHECK COMBINE
                    if(arraySwitch[j][i-1] == false){
                        //COMBINE
                        if(arrayVal[j][i-1] == arrayVal[j][i]){
                            arrayVal[j][i-1] *= 2;
                            arrayVal[j][i] = null;
                            arraySwitch[j][i-1] = true;
                            
                            arrayBool[j][i] = true;
                        }
                    }
                    //Can't Combine
                    else{
                        
                    }

                }
            }
        }
    }

    update();
    wait();
    }
}

function right(){
    boolReset();
    //animate up 3 times max
    for(var k = 0; k < 3; k++){
    for(var i = 2; i >= 0; i--){
        for(var j = 0; j < 4; j++){
            //Current NOT NULL
            if(arrayVal[j][i] != null){
                //NEXT NULL
                if(arrayVal[j][i+1] == null){
                    var tempVal = arrayVal[j][i];
                    arrayVal[j][i] = null;
                    arrayVal[j][i+1] = tempVal;

                } else { // NEXT NOT NULL
                    //CHECK COMBINE
                    if(arraySwitch[j][i+1] == false){
                        //COMBINE
                        if(arrayVal[j][i+1] == arrayVal[j][i]){
                            arrayVal[j][i+1] *= 2;
                            arrayVal[j][i] = null;
                            arraySwitch[j][i+1] = true;
                            
                            arrayBool[j][i] = true;
                        }
                    }
                    //Can't Combine
                    else{
                        
                    }

                }
            }
        }
    }

    update();
    wait();
    }
    //newRandom();
}