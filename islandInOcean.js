/*
Find the number of island formed by 1 in a binary 2d matrix.
e.g. The matrix below has two islands:

0 0 0 0 0 0 0
0 1 1 0 0 0 0
0 1 0 0 1 0 0
0 1 1 0 1 1 1
0 0 0 0 1 1 0
0 0 0 0 0 0 0
*/

//NOTE: NOT 100% SURE IF IT WORKS, THIS IS JUST AN ATTEMPT FOR PERSONAL RECORD KEEPING

function findIslands(ocean) {
    let islands = 0;
    for(let i = 0; i < ocean.length; i++) {
        for(let x = 0; x < ocean[i].length; x++) {
            if(ocean[i][x] === 1) {
                island++;
                checkForLand(ocean, i, x)
            }
        }
    }
    return islands;
}

function checkForLand(ocean, row, col) {
    let coords = []

    if(row >= ocean.length || col > ocean.length || ocean[row][col] === 0){
        return;
    }
    ocean[row][col] = 0;
    let nextCol = checkForLand(ocean, row, col+1);
    let nextRow = checkForLand(ocean, row+1, col);
    return;
}
