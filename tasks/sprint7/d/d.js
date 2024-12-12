const _readline = require('readline');
const fileStream = require('fs').createReadStream('input.txt');
const _reader = _readline.createInterface({ input: fileStream });
const _inputLines = [];
_reader.on('line', line => _inputLines.push(line));
fileStream.on('end', solve);

function fibonacci(n) {
  const dp = Array.from({ length: n }, () => 1);
  const MOD = 1e9 + 7;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] % MOD + dp[i - 2] % MOD;
  }

  return dp[n] % MOD;
}

function solve(line = 0) {
  const n = Number(_inputLines[line]);
  console.log(fibonacci(n));
}
