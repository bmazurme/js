function wordsToMarks(string) {
  return [...string].reduce((a, x) => a + x.charCodeAt(0) - 96, 0);
}
 
console.log(wordsToMarks('attitude'), 100);
console.log(wordsToMarks('friends'), 75);
console.log(wordsToMarks('family'), 66);
console.log(wordsToMarks('selfness'), 99);
console.log(wordsToMarks('knowledge'), 96);
