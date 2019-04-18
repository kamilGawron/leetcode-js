var maxIncreaseKeepingSkyline = function (grid) {
    let i, j, k, lenOut, lenIn;
    /*let result_arr=[][];*/
    let max_row, max_col;
    let licznik =0;
    lenOut = grid.length;
    for (i = 0; i < lenOut; i++) {
        lenIn = grid[i].length;
        max_row = Math.max.apply(null, grid[i]);
        for (j = 0; j < lenIn; j++) {
            max_col = grid[i][j];
            for (k = 0; k < lenIn; k++) {
                if (grid[k][j] > max_col) {
                    max_col = grid[k][j];
                }
            }
            while((grid[i][j]<max_col)&&(grid[i][j]<max_row)){
                grid[i][j]++;
                licznik ++;
            }
        }

    }
    return licznik;
};

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));