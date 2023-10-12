function humanReadable (seconds) {
  const convert = (s) => s.toString().padStart(2, '0');
  const hh = Math.trunc(seconds / 3600);
  const mm = Math.trunc((seconds - hh * 3600) / 60);
  const ss = Math.trunc((seconds - hh * 3600 - mm * 60) % 60);
 
  return `${convert(hh)}:${convert(mm)}:${convert(ss)}`;
}
 
console.log(humanReadable(0), '00:00:00');
console.log(humanReadable(59), '00:00:59');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(90), '00:01:30');
console.log(humanReadable(3599), '00:59:59');
console.log(humanReadable(3600), '01:00:00');
console.log(humanReadable(45296), '12:34:56');
console.log(humanReadable(86399), '23:59:59');
console.log(humanReadable(86400), '24:00:00');
console.log(humanReadable(359999), '99:59:59');