$(document).ready(function() {
    var theHeart = $("#overview_heart");
    var container = $("#main")
    $("#btn_Valentine").click(function() {
        container.hide();
        theHeart.show();
    });
  });