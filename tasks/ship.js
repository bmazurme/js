class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}


 
let emptyShip = new Ship(0, 0);
console.log(emptyShip.isWorthIt());
 
let aWorthyShip = new Ship(100, 20);
console.log(aWorthyShip.isWorthIt());
