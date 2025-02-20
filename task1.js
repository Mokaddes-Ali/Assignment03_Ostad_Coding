function areK_Ostad(str1, str2, k) {
    if (str1 === str2) return true;

    const len1 = str1.length;
    const len2 = str2.length;

    const dp = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            if (i === 0) {
                dp[i][j] = j; 
            } else if (j === 0) {
                dp[i][j] = i; 
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; 
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],   
                    dp[i][j - 1],    
                    dp[i - 1][j - 1] 
                );
            }
        }
    }
    return dp[len1][len2] <= k;
}

// Example
const str1 = "anagram";
const str2 = "grammar";
const k = 3;

console.log(areK_Ostad(str1, str2, k) ? "Yes" : "No");

