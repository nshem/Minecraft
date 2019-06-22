class MiningTool {
  constructor(name, ores) {
    this.name = name; //string
    this.ores = ores; //array
  }

  canMine(pixel) {
    // check if tools can mine some ore 
    let isCompatible = this.ores.includes(pixel);
    let canGetTheOre = false;
    let gameMatrix = GAME.currentWorld.matrix;
    let currentPixel = GAME.currentPixel;
    let pixelX = currentPixel.position[0];
    let pixely = currentPixel.position[1];
    if (pixely === 0) {
      canGetTheOre = true;
    } else {
      let leftPositionPixel = gameMatrix[pixelX][pixely - 1];
      // return false if leaf has wood beneath him, and there is a leaf from his side 
      if (currentPixel.type.slice(-1)[0] === "leaf") {
        if (gameMatrix[pixelX][pixely + 1].type.slice(-1)[0] === "wood" && (gameMatrix[pixelX - 1][pixely].type.slice(-1)[0] === "leaf" || gameMatrix[pixelX + 1][pixely].type.slice(-1)[0] === "leaf")) {
            return false;
        }
      }
      if (leftPositionPixel.type.slice(-1)[0] === "sky") {
        canGetTheOre = true;
      }
    }

    if (isCompatible && canGetTheOre) {
      return true;
    } else {

      return false;
    }
  }




  canCutTree() {

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