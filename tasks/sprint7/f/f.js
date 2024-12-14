const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);
 
function getMax(n, k) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, (_, i) => i === 1 ? 1 : 0);

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i >= j) {
        dp[i] = (dp[i] + dp[i - j]) % MOD;
      }
    }
  }

  return dp[n];
}
 
function solve(line = 0) {
  const [n, k] = _inputLines[line].split(' ').map(Number);
  console.log(getMax(n, k));
}