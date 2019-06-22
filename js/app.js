// Namespaces

const GAME = {
  ores: ["wood", "leaf", "dirt", "grass", "stone"],
  tools: {
    axe: new MiningTool("axe", ["wood", "leaf"]),
    pickaxe: new MiningTool("pickaxe", ["stone"]),
    shovel: new MiningTool("shovel", ["dirt", "grass"]),
    build: new BuildingTool()
  },
  currentWorld: new World(WORLD_TEMPLATES.default),
  currentOre: undefined,
  currentTool: undefined,
  currentPixel: undefined,
};

const DOM_RELATED = {
  world: $('#world'),
  tools: $('.tool'),
  heldOre: $('#held-ore'),

  addPixelsEventListener: function (somePixel) {
    $(somePixel).click((e) => {
      if (GAME.currentTool instanceof MiningTool) {
        let thisCurrentPosition = $(e.target).attr('position');
        console.log(thisCurrentPosition);
        GAME.currentPixel = GAME.currentWorld.matrix[thisCurrentPosition.substring(0, thisCurrentPosition.indexOf(','))][thisCurrentPosition.substring(1 + thisCurrentPosition.indexOf(','))];

        console.log(GAME.currentPixel);
        let typeClickedOre = e.target.classList[e.target.classList.length - 1];
        if (GAME.currentTool.canMine(typeClickedOre)) {
          GAME.currentOre = typeClickedOre;
          DOM_RELATED.heldOre.removeClass(DOM_RELATED.heldOre.attr("class").split(' ')[1]);
          DOM_RELATED.heldOre.addClass(typeClickedOre);
          $(e.target).removeClass(typeClickedOre);
        }
        //update js matrix
        GAME.currentPixel.type = [];
        let pixelElmClasses = $(e.target).attr('class').split(' ');
        for (let i = 0; i < pixelElmClasses.length; i++) {
          GAME.currentPixel.type.push(pixelElmClasses[i]);
        }

      } else if (GAME.currentTool instanceof BuildingTool) {
        if (GAME.tools.build.ore) {
          if (GAME.tools.build.canBuild(e.target)) {
            let pixelX = parseInt($(e.target).attr("position").split(",")[0]);
            let pixelY = parseInt($(e.target).attr("position").split(",")[1]);
            let pixelType = $(e.target).attr("class").split(" ").slice(-1)[0];
            console.log(`pixelType ${pixelType}`);
            GAME.currentWorld.matrix[pixelX][pixelY].type.push(GAME.tools.build.ore);
            $(e.target).addClass(GAME.tools.build.ore);
            DOM_RELATED.heldOre.removeClass(GAME.tools.build.ore)
            DOM_RELATED.heldOre.addClass("sky");
            GAME.tools.build.ore = undefined;
          } else {
            console.log('can\'t build!');
          }
        }

      }
    })
  },

  createHtmlWorld: function () {
    //set default tool
    GAME.currentTool = GAME.tools.axe;

    let currentMaxrix = GAME.currentWorld.matrix;

    for (let i = 0; i < currentMaxrix.length; i++) {
      // create column 
      let thisCurrentHtmlColumn = $('<div/>')
        .addClass('column')
        .appendTo(DOM_RELATED.world);
      for (let j = 0; j < currentMaxrix[i].length; j++) {
        let thisCurrentPixel = currentMaxrix[i][j];
        // create elements inside the column 
        let thisCurrentHtmlPixel = $('<div/>')
        for (let i = 0; i < thisCurrentPixel.type.length; i++) {
          thisCurrentHtmlPixel.addClass(`${thisCurrentPixel.type[i]}`)
        }
        thisCurrentHtmlPixel.attr(`position`, `${thisCurrentPixel.position}`)
          .appendTo(thisCurrentHtmlColumn);
        DOM_RELATED.addPixelsEventListener(thisCurrentHtmlPixel);
      }
    }
  }
}
