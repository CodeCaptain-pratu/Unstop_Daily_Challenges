
//Approach 1 : Top Down 
function calculateMaxFun(N, B, price, stock, fun) {
    let dp = Array.from({ length: N + 1 }, () => Array(B + 1).fill(-1));

    function solve(i, remainingbudget) {
        if (i === N) {
            return 0;
        }

        if (dp[i][remainingbudget] !== -1) {
            return dp[i][remainingbudget];
        }

        let maxfun = 0;

        for (let k = 0; k <= stock[i]; k++) { // ✅ fixed
            let cost = k * price[i];
            let value = k * fun[i];

            if (cost <= remainingbudget) {
                maxfun = Math.max(
                    maxfun,
                    value + solve(i + 1, remainingbudget - cost)
                );
            }
        }

        return dp[i][remainingbudget] = maxfun;
    }

    return solve(0, B);
}

//Approach 2 : Bottom Up 
function calculateMaxFun(N, B, price, stock, fun) {
    let dp = Array(B + 1).fill(0);

    for (let i = 0; i < N; i++) {
        for (let j = B; j >= 0; j--) {
            for (let k = 1; k <= stock[i]; k++) {
                let cost = k * price[i];
                let value = k * fun[i];

                if (j >= cost) { // ✅ important fix
                    dp[j] = Math.max(dp[j], value + dp[j - cost]);
                }
            }
        }
    }

    return dp[B];
}
