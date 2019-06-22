class MiningTool {
  constructor(name, ores) {
    this.name = name; //string
    this.ores = ores; //array
  }

  getPixelType(x, y) {
    if ((x >= GAME.currentWorld.matrix.length || x < 0) || (y >= GAME.currentWorld.matrix.length || y < 0)) {
      return false;
    } else {
      return GAME.currentWorld.matrix[x][y].type.slice(-1)[0];
    }
  }

  canMine(pixel) {
    // check if tools can mine some ore 
    let isCompatible = this.ores.includes(pixel);
    let canGetTheOre = false;
    let gameMatrix = GAME.currentWorld.matrix;
    let currentPixel = GAME.currentPixel;
    let pixelX = currentPixel.position[0];
    let pixely = currentPixel.position[1];
    let currentPixelType = this.getPixelType(pixelX, pixely)
    let leftPositionPixel = this.getPixelType(pixelX, pixely - 1);
    let rightPositionPixel = this.getPixelType(pixelX, pixely + 1);
    let leftLeaf = this.getPixelType(pixelX - 1, pixely);
    let rightLeaft = this.getPixelType(pixelX + 1, pixely);
    let underleftLeaf = this.getPixelType(pixelX - 1, pixely + 1);
    let underRightLeaf = this.getPixelType(pixelX + 1, pixely + 1);
    if (pixely === 0) {
      canGetTheOre = true;
    } else {

      // return false if leaf has wood beneath him, and there is a leaf from his side 

      if (currentPixelType === "leaf") {
        //wood 
        if (rightPositionPixel == "wood") {
          alert("wood");
          if (leftLeaf === "leaf" || rightLeaft === "leaf") {
            if (underleftLeaf === "sky" || underRightLeaf === "sky") {
              return false;
            } else if (leftLeaf === "leaf" || rightLeaft === "leaf") {
              if (underleftLeaf === "sky" || underRightLeaf === "sky") {
                return false;
              }
            }
          }
          // sky 
        } else if (rightPositionPixel === "sky") {
          if (leftLeaf === "leaf" && rightLeaft === "leaf") {
            if (underleftLeaf === "sky" || underRightLeaf === "sky") {
              return false;
            } else if (leftLeaf === "leaf" || rightLeaft === "leaf") {
              if (underleftLeaf === "sky" || underRightLeaf === "sky") {
                return false;
              }
            }
          }
         
          if (leftLeaf) {
            console.log(leftLeaf);
            
            if (underleftLeaf === "sky") {
              return false;
            }
           
             
          } else if (rightLeaft) {
            console.log(rightLeaft);
            if (underRightLeaf === "sky") {
              return false;
            }
            
          }
        } else {

        }
      }
    }

    // check if either side of the leaf there is another leaf and beath him he has sky return false



    if (leftPositionPixel === "sky") {
      canGetTheOre = true;
    }

    if (isCompatible && canGetTheOre) {
      return true;
    } else {

      return false;
    }
  }
}


class BuildingTool {
  constructor() {
    this.ore = undefined;
  }
  canBuild(pixel) {
    let pixelX = parseInt($(pixel).attr("position").split(",")[0]);
    let pixelY = parseInt($(pixel).attr("position").split(",")[1]);
    let pixelInMatrix = GAME.currentWorld.matrix[pixelX][pixelY];
    let pixelInMatrixType = pixelInMatrix.type.slice(-1)[0];
    if (pixelInMatrixType === "sky") {
      if (pixelY === GAME.currentWorld.matrix[pixelX].length - 1) {
        return true;
      } else if (pixelY < GAME.currentWorld.matrix.length - 1) {
        let pixelBelowType = GAME.currentWorld.matrix[pixelX][pixelY + 1].type.slice(-1)[0];
        if (GAME.currentOre === "leaf" || GAME.currentOre === "wood") {
          if (pixelX === 0) {
            let pixelToRight = GAME.currentWorld.matrix[pixelX + 1][pixelY];
            let pixelToRightType = pixelToRight.type.slice(-1)[0];
            if (pixelToRightType === "leaf" || pixelToRightType === "wood" || GAME.ores.includes(pixelBelowType)) {
              return true;
            }
          } else if (pixelX === GAME.currentWorld.matrix.length - 1) {
            let pixelToLeft = GAME.currentWorld.matrix[pixelX - 1][pixelY];
            let pixelToLeftType = pixelToLeft.type.slice(-1)[0];
            if (pixelToLeftType === "leaf" || pixelToLeftType === "wood" || GAME.ores.includes(pixelBelowType)) {
              return true;
            }
          } else if (pixelX < GAME.currentWorld.matrix.length - 1 && pixelX > 0) {
            let pixelToLeft = GAME.currentWorld.matrix[pixelX - 1][pixelY];
            let pixelToLeftType = pixelToLeft.type.slice(-1)[0];
            let pixelToRight = GAME.currentWorld.matrix[pixelX + 1][pixelY];
            let pixelToRightType = pixelToRight.type.slice(-1)[0];
            if (pixelToLeftType === "leaf" || pixelToLeftType === "wood" || pixelToRightType === "leaf" || pixelToRightType === "wood" || GAME.ores.includes(pixelBelowType)) {
              return true;
            }
          }
        } else if (GAME.ores.includes(pixelBelowType)) {
          return true;
        }
      }
    }
    return false;
  }
}