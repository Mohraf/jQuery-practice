$(".clickable").on('click', () => {
  $(".walrus-showing").toggle();
  $(".walrus-hidden").toggle();
});

$("button#green").on('click', () => {
  $("body").removeClass();
  $("body").addClass("green-background");
  // $("body").css("background-color", "green"); // this method also works but it mixes our concerns causing logical errors
});

$("button#yellow").on('click', () => {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});

$("button#red").on('click', () => {
  $("body").removeClass();
  $("body").addClass('red-background');
});
