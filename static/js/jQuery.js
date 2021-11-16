$(".clickable").on('click', () => {
  $(".walrus-showing").toggle();
  $(".walrus-hidden").toggle();
});

$("button#green").on('click', () => {
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#yellow").on('click', () => {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});

$("button#red").on('click', () => {
  $("body").removeClass();
  $("body").addClass('red-background');
});
