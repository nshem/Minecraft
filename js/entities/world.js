class World {
    constructor(worldTemplate) {
        this.matrix = this.createWorld(worldTemplate);
    }

    createWorld(worldTemplate) {
        let newWorld = worldTemplate;
        for (let i = 0; i < worldTemplate.length; i++) {
            for (let j = 0; j < worldTemplate[i].length; j++) {
                let pixelType = newWorld[i][j];
                this.setpixelTypeToMatrix(pixelType, i, j, newWorld);
            }
        }
        return newWorld;
    }

    setpixelTypeToMatrix(pixelType, i, j, newWorld) {
        if (pixelType === "sky") {
            let pixel = newWorld[i][j] = new Pixel(["pixel", "sky"]);
            pixel["position"] = [i, j];
        } else if (pixelType === "leaf") {
            let pixel = newWorld[i][j] = new Pixel(["pixel", "sky", "leaf"]);
            pixel["position"] = [i, j];
        } else if (pixelType === "wood") {
            let pixel = newWorld[i][j] = new Pixel(["pixel", "sky", "wood"]);
            pixel["position"] = [i, j];
        } else if (pixelType === "grass") {
            let pixel = newWorld[i][j] = new Pixel(["pixel", "sky", "grass"]);
            pixel["position"] = [i, j];
        } else if (pixelType === "dirt") {
            let pixel = newWorld[i][j] = new Pixel(["pixel", "sky", "dirt"]);
            pixel["position"] = [i, j];
        } else if (pixelType === "stone") {
            let pixel = newWorld[i][j] = new Pixel(["pixel", "sky", "stone"]);
            pixel["position"] = [i, j];
        }
    }
}


const WORLD_TEMPLATES = {
    default: [
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
}