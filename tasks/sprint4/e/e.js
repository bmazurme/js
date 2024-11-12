function getHash(str, a = 1000, m = 123987123) {
  const hash = str.split('').reduce((acc, x, i) => {
    let summ = acc + x.charCodeAt();
    return i !== str.length - 1 ? summ * a % m : summ % m;
  }, 0);

  return hash;
}

function generate() {
  const dict = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';
  while(str.length < 16) {
    str += dict[(Math.floor(Math.random() * dict.length))];
  }
  return str;
}
 
function solve() {
  const res = {};
  for (let i = 0; i < 100000; i++) {
    const first = generate();
    const hash = getHash(first);
  
    if (res[hash]) {
      res[hash].push(first);
    } else {
      res[hash] = [first];
    }
  }

  Object.keys(res).forEach((x) => {
    if (res[x].length > 1) console.log(res[x], x);
  });

  // console.log(res);

  // const a = 1000;
  // const m = 123987123;
  //permutations();
  // const str = 'ezhgeljkablzwnvuwqvp';
  // const str2 = 'gbpdcvkumyfxillgnqrv';
  // console.log(getHash(str));
  // console.log(getHash(str2));
}
 
solve();
