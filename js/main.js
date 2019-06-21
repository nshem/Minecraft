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

// initiate World
DOM_RELATED.createHtmlWorld();

DOM_RELATED.tools.click((e) => {
  let typeClickedTool = e.target.classList[e.target.classList.length - 1];
  GAME.currentTool = GAME.tools[typeClickedTool];
});

DOM_RELATED.heldOre.click((e)=> {
  GAME.currentTool = GAME.tools.build;
  GAME.currentOre = DOM_RELATED.heldOre.attr('class').split(" ")[DOM_RELATED.heldOre.attr('class').split(" ").length - 1];
  GAME.tools.build.ore = GAME.currentOre;
})

