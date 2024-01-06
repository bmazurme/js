const height = 8;
 
const n = '**    ****    *****   **** *  ****  * ****   *****    ****    **';
const t = '****************   **      **      **      **      **      **   ';
const l = '**      **      **      **      **      **      ****************';
const s = ' ****** **    ****       **         **        ****    ** ****** ';
const view = [n, t, l, s, t, l];
 
for (let h = 0; h < height; h++) {
  let line = '';
 
  for (let char = 0; char < view.length; char++) {
    line += view[char].substring(h * 8, (h + 1) * 8) + ' '.repeat(3);
  }
  line = line.replaceAll('*', '■');
 
  console.log(`${line}\n`);
}