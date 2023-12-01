function correct(string) {
  const dict = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };

	return string.split('').map((x) => dict[x] ? dict[x] : x).join('');
}

// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

console.log(correct('L0ND0N'),'LONDON');
console.log(correct('DUBL1N'),'DUBLIN');
console.log(correct('51NGAP0RE'),'SINGAPORE');
console.log(correct('BUDAPE5T'),'BUDAPEST');
console.log(correct('PAR15'),'PARIS');
