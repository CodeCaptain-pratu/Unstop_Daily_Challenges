//Approach 1 : 
function restoreMatrix(matrix, N) {
    /*
    Write your logic here to restore the matrix.
    Parameters:
        matrix: N x N matrix with shadowed values as 0
        N: Size of the matrix
    Returns:
        Array: Restored matrix if possible, otherwise return -1
    */
    function isValid(row, col, num){
        for(let j=0;j<N;j++){
            if(matrix[row][j] === num){
                return false;
            }
        }
        for(let i=0;i<N;i++){
            if(matrix[i][col] === num){
                return false;
            }
        }
        return true;
    }

    function solve(){
        for(let i=0;i<N;i++){
            for(let j=0;j<N;j++){
                if(matrix[i][j]===0){
                    for(let num=1;num<=N;num++){
                        if(isValid(i,j,num)){
                            matrix[i][j] = num;
                            if(solve()){
                                return true;
                            }
                            matrix[i][j]=0;
                        }
                    }
                }
                return false;
            }
        }
        return true;
    }
    if(solve()){
        return matrix;
    }else{
        return -1;
    }
}

//Approach 2 
function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const N = parseInt(data[0], 10);
    let index = 1;
    const matrix = [];
    
    for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = 0; j < N; j++) {
            row.push(parseInt(data[index++], 10));
        }
        matrix.push(row);
    }
    
    const result = restoreMatrix(matrix, N);
    
    if (result === -1) {
        console.log(-1);
    } else {
        result.forEach(row => {
            console.log(row.join(' '));
        });
    }
}

main();

function restoreMatrix(matrix, N) {
    /*
    Write your logic here to restore the matrix.
    Parameters:
        matrix: N x N matrix with shadowed values as 0
        N: Size of the matrix
    Returns:
        Array: Restored matrix if possible, otherwise return -1
    */
    let rowused = Array.from({length:N},()=>Array(N+1).fill(false));
    let colused = Array.from({length:N},()=>Array(N+1).fill(false));

    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            let val = matrix[i][j];
            if(val!==0){
                if(rowused[i][val] || colused[j][val]){
                    return -1;
                }
                rowused[i][val]=true;
                colused[j][val]=true;
            }
        }
    }
    function solve(cell){
        if(cell === N*N){
            return true;
        }
        let i=Math.floor(cell/N);
        let j=cell%N;
        if(matrix[i][j]!==0){
            return solve(cell+1);
        }
        for(let num=1;num<=N;num++){
            if(!rowused[i][num] && !colused[j][num]){
                matrix[i][j]=num;
                rowused[i][num]=true;
                colused[j][num]=true;
                if(solve(cell+1)){
                    return true;
                }
                matrix[i][j]=0;
                rowused[i][num]=false;
                colused[j][num]=false;
            }
        }
        return false;
    }
    if(solve(0)){
        return matrix;
    }
    return -1;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const N = parseInt(data[0], 10);
    let index = 1;
    const matrix = [];
    
    for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = 0; j < N; j++) {
            row.push(parseInt(data[index++], 10));
        }
        matrix.push(row);
    }
    
    const result = restoreMatrix(matrix, N);
    
    if (result === -1) {
        console.log(-1);
    } else {
        result.forEach(row => {
            console.log(row.join(' '));
        });
    }
}

main();
