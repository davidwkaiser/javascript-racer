  var p1;
  var p2;


$(document).ready(function() {

  function Player(name) {
    this.name = name;
    this.position = 1;
  }

  Player.prototype.move = function() {
    this.position += 1;
  }
  Player.prototype.evaluate = function() {
    if (this.position === 10){
      alert(this.name + " wins!")
      alert("clear this alert, then hit 'enter' to start again!");
      go();
    }
  }

  function go() {
    p1 = new Player("Player 1");
    p2 = new Player("Player 2");
    $("#player-strip-1").children().removeClass("active1");
    $("#1").addClass("active1");
    $("#player-strip-2").children().removeClass("active2");
    $("#11").addClass("active2");
  }

go();

// to move racer 1 by pressing space
  $(document).keypress(function(e) {
      if(e.which == 13) {
        p1.move();
        $("#player-strip-1").children().removeClass("active1");
        var td = "#"+p1.position;
        $(td).addClass("active1");
        p1.evaluate();
      }
  });

// to move racer 2 by pressing enter
  $(document).keypress(function(e) {
      if(e.which == 32) {
        p2.move();
        $("#player-strip-2").children().removeClass("active2");
        var td = "#"+(p2.position+10);
        $(td).addClass("active2");
        p2.evaluate();
      }
  });

//input player names
  $("#player_names").on("submit", function(e) {
    e.preventDefault();
    var $form = $(this);
    var url = $form.attr("action");
    console.log(url);
    var params = $form.serialize();
    console.log(params);
    var request = $.ajax({
      url: url,
      type: 'POST',
      data: params
    });

    request.done(function (voteCount) {
      $("#player_names").hide();
    });
  });

});
