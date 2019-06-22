$(document).ready(function () {
  // show modal when keyboard: i is pressed
  $('body').on("keyup", function (event) {
    let key_press = event.which;
    if (key_press === 73) {
      $("#gameModal").modal("show");
    }
  });
});

// Main Script (for running commands)

// initialize World
DOM_RELATED.createHtmlWorld();

DOM_RELATED.tools.click((e) => {
  $('.chosen-tool').removeClass('chosen-tool');
  DOM_RELATED.heldOre.removeClass('build-chosen');
  let typeClickedTool = e.target.classList[e.target.classList.length - 1];
  GAME.currentTool = GAME.tools[typeClickedTool];
  $(e.target).addClass('chosen-tool');
});

DOM_RELATED.heldOre.click((e) => {
  if (GAME.currentOre) {
    $('.chosen-tool').removeClass('chosen-tool')
    DOM_RELATED.heldOre.removeClass('build-chosen');
    GAME.currentTool = GAME.tools.build;
    GAME.currentOre = DOM_RELATED.heldOre.attr('class').split(" ")[DOM_RELATED.heldOre.attr('class').split(" ").length - 1];
    GAME.tools.build.ore = GAME.currentOre;
    // DOM_RELATED.heldOre.css("outline", "none");
    DOM_RELATED.heldOre.css("outline", "calc(var(--world-edge) / 150) solid #ffff00");
  }
})

