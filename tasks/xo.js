function XO(str) {
  const { x, o } = str.toLowerCase().split('')
    .reduce((a, c) => ({
      x: a.x += c === 'x' ? 1 : 0,
      o:  a.o += c === 'o' ? 1 : 0,
    }), { x: 0, o: 0});

  return x === o;
}

// let x = str.match(/x/gi);
// let o = str.match(/o/gi);
// return (x && x.length) === (o && o.length);

// return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
