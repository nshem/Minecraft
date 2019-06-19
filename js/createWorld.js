let matrixWorld = [
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "leaf", "leaf", "leaf", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "leaf", "leaf", "leaf", "wood", "wood", "wood", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "leaf", "leaf", "leaf", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"]
]



function createWorld(matrixWorld) {
    for (let i = 0; i < matrixWorld.length; i++) {
        for (let j = 0; j < matrixWorld[i].length; j++) {
            let pixelType = matrixWorld[i][j];
            setpixelTypeToMatrix(pixelType, i, j);
        }
    }
}

function createHtmlPixelesFromMatrixWorld(){
    //TODO create html elements from the matrixWorld
}

function setpixelTypeToMatrix(pixelType, i, j) {
    if (pixelType === "sky") {
        matrixWorld[i][j] = new Sky();
    } else if (pixelType === "leaf") {
        matrixWorld[i][j] = new Leaf();
    } else if (pixelType === "wood") {
        matrixWorld[i][j] = new Wood();
    } else if (pixelType === "grass") {
        matrixWorld[i][j] = new Grass();
    } else if (pixelType === "dirt") {
        matrixWorld[i][j] = new Dirt();
    } else if (pixelType === "stone") {
        matrixWorld[i][j] = new Stone();
    }    
}