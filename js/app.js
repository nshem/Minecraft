// Namespaces

const GAME = {
  ores: ["wood", "leaf", "dirt", "stone"],
  tools: {
    axe: new Tool("axe", ["wood", "leaf"]),
    pickaxe: new Tool("pickaxe", ["stone"]),
    shovel: new Tool("shovel", ["dirt", "grass"]),
    build: new Tool("build")
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
      let thisCurrentPosition = $(e.target).attr('position');
      console.log(thisCurrentPosition);
      GAME.currentPixel = GAME.currentWorld.matrix[thisCurrentPosition.substring(0, thisCurrentPosition.indexOf(','))][thisCurrentPosition.substring(1 + thisCurrentPosition.indexOf(','))];

      console.log(GAME.currentPixel);
      let typeClickedOre = e.target.classList[e.target.classList.length - 1];

      GAME.currentOre = GAME.currentTool.canMine(typeClickedOre) ? typeClickedOre : undefined;
      if (GAME.currentTool.canMine(typeClickedOre)) {
        DOM_RELATED.heldOre.removeClass(DOM_RELATED.heldOre.attr("class").split(' ')[1]);
        DOM_RELATED.heldOre.addClass(typeClickedOre);
        $(e.target).removeClass(typeClickedOre);
      }
      //update js matrix
      GAME.currentPixel.type = `${$(e.target).attr('class')}`;
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
          .addClass(`pixel ${thisCurrentPixel.type}`)
          .attr(`position`, `${thisCurrentPixel.position}`)
          .appendTo(thisCurrentHtmlColumn);
        DOM_RELATED.addPixelsEventListener(thisCurrentHtmlPixel);
      }
    }
  }
}
