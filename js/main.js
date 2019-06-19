// Main Script (for running commands)

DOM_RELATED.pixels.click((e)=> {
  // TODO: save the information I am retrieving and manipulate it
  let typeClickedOre = e.target.classList[e.target.classList.length-1];
  GAME.currentOre = GAME.currentTool.canMine(typeClickedOre) ? typeClickedOre : undefined;
  if (GAME.currentTool.canMine(typeClickedOre)) {
    DOM_RELATED.heldOre.removeClass(DOM_RELATED.heldOre.attr("class").split(' ')[1]);
    DOM_RELATED.heldOre.addClass(typeClickedOre);
  }
});

DOM_RELATED.tools.click((e)=> {
  let typeClickedTool = e.target.classList[e.target.classList.length-1];
  GAME.currentTool = GAME.tools[typeClickedTool];
})
