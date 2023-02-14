$(document).ready(function() {
    var theHeart = $("#heart");
    var container = $("#main")
    $("#btn_Valentine").click(function() {
        container.hide();
        theHeart.show();
    });
  });