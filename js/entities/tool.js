class MiningTool {
  constructor(name, ores) {
    this.name = name; //string
    this.ores = ores; //array
  }

  getPixelType(x, y) {
    if ((x < GAME.currentWorld.matrix.length && x >= 0) && (y <= GAME.currentWorld.matrix.length && y >= 0)) {
      return GAME.currentWorld.matrix[x][y].type.slice(-1)[0];
    } else {
      return false;
    }
  }

  canMine(pixel) {
    // check if tools can mine some ore 
    let isCompatible = this.ores.includes(pixel);
    let pixType = this.getPixelType;
    let canGetTheOre = false;
    let currentPixel = GAME.currentPixel;
    let pixelX = currentPixel.position[0];
    let pixelY = currentPixel.position[1];
    let currentPixelType = pixType(pixelX, pixelY);
    let rightPixel = pixType(pixelX + 1, pixelY);
    let leftPixel = pixType(pixelX - 1, pixelY);
    let belowPixel = pixType(pixelX, pixelY + 1);
    let abovePixel = pixType(pixelX, pixelY - 1);
    if (currentPixelType === "leaf") {
      // below wood
      if (belowPixel === "wood") {
        if (rightPixel === "leaf" || leftPixel === "leaf") {
          return false;
        } //below sky
      } else if (belowPixel === "sky") {
        if (rightPixel === "leaf" && leftPixel === "leaf") {
          return false;
        } // below not sky
      } else if (belowPixel !== "sky") {
        //edge cases
        if (pixelX + 1 === GAME.currentWorld.matrix.length) {
          if (leftPixel !== "sky") {
            if (pixType(pixelX - 1, pixelY + 1) === 'sky') {
              return false;
            }
          }
        } else if (pixelX - 1 < 0) {
          if (rightPixel !== "sky") {
            if (pixType(pixelX + 1, pixelY + 1) === 'sky') {
              return false;
            }
          }
        }
        // both 
        if (rightPixel !== "sky" && leftPixel !== "sky") {
          if (pixType(pixelX - 1, pixelY + 1) === "sky" && pixType(pixelX + 1, pixelY + 1) === "sky") {
            return false;
          } // each side of the leaf
        } else if (rightPixel !== "sky") {
          if (pixType(pixelX + 1, pixelY + 1) === 'sky') {
            return false;
          }
        } else if (leftPixel !== "sky") {
          if (pixType(pixelX - 1, pixelY + 1) === 'sky') {
            return false;
          }
        }
      }
    }
    if (abovePixel === "sky") {
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
    let pixelBelowType = GAME.currentWorld.matrix[pixelX][pixelY + 1].type.slice(-1)[0];
    if (pixelInMatrixType === "sky") {
      if (pixelY === GAME.currentWorld.matrix[pixelX].length - 1) {
        return true;
      } else if (pixelY < GAME.currentWorld.matrix.length - 1) {
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