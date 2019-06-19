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
    //----------------------------------------------------------------
});