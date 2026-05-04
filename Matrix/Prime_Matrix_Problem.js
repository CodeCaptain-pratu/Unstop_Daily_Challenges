function primeMatrix(n, matrix) {
    // Write your logic here.
    let rows = new Array(n).fill(false);
    let cols = new Array(n).fill(false);
    function isPrime(num){
        if(num<=1){
            return false
        }
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(isPrime(matrix[i][j])){
                rows[i]=true;
                cols[j]=true;
            }
        }
    }
   // let result = Array.from({length:n},()=>Array(n).fill(0));
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(rows[i] || cols[j]){
                matrix[i][j]=-1;
            }
        }
    }
    return matrix;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\s+/);
    
    const n = parseInt(input[0]);
    const matrix = [];
    let index = 1;
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(parseInt(input[index++]));
        }
        matrix.push(row);
    }
    
    primeMatrix(n, matrix);
    
    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

main();
