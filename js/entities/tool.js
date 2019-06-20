class Tool {
  constructor(name, ores) {
    this.name = name; //string
    this.ores = ores; //array
  }

  canMine(pixel) {
    // check if tools can mine some ore 
    let isCompatible = this.ores.includes(pixel);
    let canGetTheOre = false;
    //get the current pixel 
    let pixelType = GAME.currentPixel.type.slice(-1);

    // check type of the pixels with split
  
    // set canGetTheOre to true if the ore is in the first in the row or have sky index above 
    if (pixel.position[0] === 0) {
      canGetTheOre = true;
    } else if (pixel.position[0] - 1 === "sky") {
      canGetTheOre = true;
    }

    if (isCompatible && canGetTheOre) {
      return true;
    } else {
      return false;
    }
  }
}