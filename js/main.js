<<<<<<< HEAD
// Main Script (for running commands)

DOM_RELATED.pixels.click((e) => {
  // TODO: save the information I am retrieving and manipulate it
  alert(`you clicked a ${e.target.classList[e.target.classList.length - 1]}`);
})
=======
<<<<<<< HEAD
// Main Script (for running commands)

DOM_RELATED.pixels.click((e)=> {
  // TODO: save the information I am retrieving and manipulate it
  let typeClickedOre = e.target.classList[e.target.classList.length-1];
  GAME.currentOre = GAME.currentTool.canMine(typeClickedOre) ? typeClickedOre : undefined;
  DOM_RELATED.heldOre.addClass(typeClickedOre);
});

DOM_RELATED.tools.click((e)=> {
  let typeClickedTool = e.target.classList[e.target.classList.length-1];
  GAME.currentTool = GAME.tools[typeClickedTool];
})
=======
>>>>>>> d8b36333048da5663f37dc2adc1edebee42192ed
>>>>>>> bb1f2233a8e46e476faba4199171bc90a7554088
