class World {
    constructor(matrix) {
        this.matrix = matrix;
    }

    createWorld(matrixWorld) {
        for (let i = 0; i < matrixWorld.length; i++) {
            for (let j = 0; j < matrixWorld[i].length; j++) {
                let pixelType = matrixWorld[i][j];
                this.setpixelTypeToMatrix(pixelType, i, j);
            }
        }
    }

    setpixelTypeToMatrix(pixelType, i, j) {
        if (pixelType === "sky") {
            let pixel = matrixWorld[i][j] = new Sky();
            pixel["position"] = [i, j];
        } else if (pixelType === "leaf") {
            let pixel = matrixWorld[i][j] = new Leaf();
            pixel["position"] = [i, j];
        } else if (pixelType === "wood") {
            let pixel = matrixWorld[i][j] = new Wood();
            pixel["position"] = [i, j];
        } else if (pixelType === "grass") {
            let pixel = matrixWorld[i][j] = new Grass();
            pixel["position"] = [i, j];
        } else if (pixelType === "dirt") {
            let pixel = matrixWorld[i][j] = new Dirt();
            pixel["position"] = [i, j];
        } else if (pixelType === "stone") {
            let pixel = matrixWorld[i][j] = new Stone();
            pixel["position"] = [i, j];
        }
    }

    createHtmlPixelesFromMatrixWorld() {
        let world_Html = $('#world');
        let current_world = this.matrix;

        for (let i = 0; i < current_world.length; i++) {
            // create column 
            let column = $('<div/>')
                .addClass('column')
                .appendTo(world_Html);
            for (let j = 0; j < current_world[i].length; j++) {
                let pixelMatrix = current_world[i][j]
                // create elements inside the column 
                let pixelType = $('<div/>')
                    .addClass(`pixel ${pixelMatrix.type}`)
                    .appendTo(column);
            }
        }
    }
}


let matrixWorld = [
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "grass", "dirt", "dirt", "dirt", "dirt"],
    ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "stone", "stone", "grass", "dirt", "dirt", "dirt", "dirt"],
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

let current_world = new World(matrixWorld);
current_world.createWorld(matrixWorld);
current_world.createHtmlPixelesFromMatrixWorld();