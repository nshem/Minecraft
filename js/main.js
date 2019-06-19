$(document).ready(function () {
  // toggle modal when keyboard: i is pressed
  // -------------------------------------------------------------
  // when the document it loading 
  $('body').on("keyup", function (event) {
    // get the char value of a key when it pressed
    let key_press = event.which;
    // show the modal if the key press is equal to the char value


    if (key_press === 73) {
      $("#gameModal").modal("show");
    }
  });
});
// Main Script (for running commands)

DOM_RELATED.pixels.click((e) => {
  // TODO: save the information I am retrieving and manipulate it
  let typeClickedOre = e.target.classList[e.target.classList.length - 1];
  GAME.currentOre = GAME.currentTool.canMine(typeClickedOre) ? typeClickedOre : undefined;
  if (GAME.currentTool.canMine(typeClickedOre)) {
    DOM_RELATED.heldOre.removeClass(DOM_RELATED.heldOre.attr("class").split(' ')[1]);
    DOM_RELATED.heldOre.addClass(typeClickedOre);
  }
});

DOM_RELATED.tools.click((e) => {
  let typeClickedTool = e.target.classList[e.target.classList.length - 1];
  GAME.currentTool = GAME.tools[typeClickedTool];
});
