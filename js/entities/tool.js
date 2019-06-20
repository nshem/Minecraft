class Tool {
  constructor(name, ores) {
    this.name = name; //string
    this.ores = ores; //array
  }

  canMine(clickedOre) {
    return this.ores.includes(clickedOre);
  }

  canBuild(pixel) {
    let pixelX = $(pixel).attr("position")[0];
    let pixelY = $(pixel).attr("position")[1];
    let pixelInMatrix = GAME.currentWorld.matrix[pixelX][pixelY];
    let pixelInMatrixType = pixelInMatrix.type.slice(-1)[0];
    let pixelBelowType = GAME.currentWorld.matrix[pixelX][pixelY+1].type.slice(-1)[0];
    if (pixelInMatrixType === "sky") {
      if (pixelY === GAME.currentWorld.matrix[pixelX].length - 1) {
        return true;
      } else if (pixelY < GAME.currentWorld.matrix.length - 1) {
        if (GAME.currentOre === "leaf" || GAME.currentOre === "wood") {
          if (pixelX === 0) {
            let pixelToRight = GAME.currentWorld.matrix[pixelX+1][pixelY];
            let pixelToRightType = pixelToRight.type.slice(-1)[0];
            if (pixelToRightType === "leaf" || pixelToRightType === "wood" || GAME.ores.includes(pixelBelowType)) {
              return true;
            }
          } else if (pixelX === GAME.currentWorld.matrix.length -1) {
            let pixelToLeft = GAME.currentWorld.matrix[pixelX-1][pixelY];
            let pixelToLeftType = pixelToLeft.type.slice(-1)[0];
            if (pixelToLeftType === "leaf" || pixelToLeftType === "wood" || GAME.ores.includes(pixelBelowType)) {
              return true;
            }
          } else if (pixelX < GAME.currentWorld.matrix.length - 1 && pixelX > 0) {
            let pixelToLeft = GAME.currentWorld.matrix[pixelX-1][pixelY];
            let pixelToLeftType = pixelToLeft.type.slice(-1)[0];
            let pixelToRight = GAME.currentWorld.matrix[pixelX+1][pixelY];
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

