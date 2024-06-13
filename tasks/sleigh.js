function Sleigh() {
 
}
 
Sleigh.prototype.authenticate = function(name, password) {
  return 'Santa Claus Ho Ho Ho!' === `${name} ${password}`;
};
 
console.log(Sleigh('Santa', 'Ho Ho Ho!', false));
console.log(Sleigh('Santa Claus', 'Ho Ho!', false));
console.log(Sleigh('jhoffner', 'CodeWars', false));
 
// function Sleigh() {
//   this.name = 'Santa Claus';
//   this.password = 'Ho Ho Ho!';
// }
 
// Sleigh.prototype.authenticate = function(name, password) {
//   return this.name == name && this.password == password;
// };
