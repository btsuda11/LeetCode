//O(1) space, O(m+n) time
//we do the same as above, except we use the matrix itself to keep track of which rows and cols should be 0, instead of using sets
//we go through matrix and if we find a 0, we mark all items in row and all items in col
//we can't simply set all items in row and col to zero, because we don't want to change rows and columns with newly formed zeroes...just original zeroes
//if our 'mark' function changed all items in selected row and col to be zero, it would mess up future iterations
//so we mark them as something else...null...and then we loop through the matrix a second time, making null items 0
const setZeroes = (matrix) =>{
      for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === 0){
              mark(matrix,i,j)
            }
        }
    }
       for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === null){
              matrix[i][j] = 0
            }
        }
    }
}

const mark = (matrix, row, col)=>{
    for (let j = 0; j < matrix[0].length; j++){
        //preserve original 0, mark items that should zero as null
        if (matrix[row][j] !== 0){
           matrix[row][j] = null         
        }
    }
    for (let i = 0; i < matrix.length; i++){
        //preserve original 0, mark items that should be zero as null
        if (matrix[i][col] !== 0){
            matrix[i][col] = null
        }
    }
}