function shortContentTextExactMatch(text,words) {
    const matches = [];
    for (const word of words) {
        if (text.includes(word)) {
            matches.push(word);
        }
    }
    return matches;
}

function shortContentTextfuzzyMatch(text,words, threshold = 0.4) {
    const matches = [];
    function getEditDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
        for (let i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (let j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
    
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j] + 1, // 删除  
                        dp[i][j - 1] + 1, // 插入  
                        dp[i - 1][j - 1] + 1 // 替换  
                    );
                }
            }
        }
    
        return dp[m][n];
    }
    for (const word of words) {
        const distance = getEditDistance(text, word) / Math.max(text.length, word.length);
        if (distance <= threshold) {
            matches.push(word);
        }
    }
    return matches;
}

function RegExpEscape(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}

function longContentTextAccurateMatch(text, words) {
    const escapedWords = words.map(RegExpEscape);
    const regex = new RegExp('('+ escapedWords.join('|') +')', 'g');
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}
export default {  
    shortContentTextExactMatch,shortContentTextfuzzyMatch,longContentTextAccurateMatch
};