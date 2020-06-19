var allStates = $("svg.us > *");
allStates.on("click", function () {
  $(this).toggleClass("pink");
});
allStates.on("click", function () {
  if (
    !$("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("A or B");
  } else if (
    !$("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("A not B");
  } else if (
    !$("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("B not A");
  } else if (
    !$("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("B");
  } else if (
    !$("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("A");
  } else if (
    !$("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("A and B");
  } else if (
    !$("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("A xor B");
  } else if (
    !$("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("False");
  } else if (
    $("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("True");
  } else if (
    $("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("A nand B");
  } else if (
    $("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("Not A");
  } else if (
    $("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("Not B");
  } else if (
    $("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("A xnor B");
  } else if (
    $("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    $("#right").hasClass("pink")
  ) {
    $("#answer").text("A implies B");
  } else if (
    $("#rect").hasClass("pink") &&
    $("#left").hasClass("pink") &&
    $("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("B implies A");
  } else if (
    $("#rect").hasClass("pink") &&
    !$("#left").hasClass("pink") &&
    !$("#intersection").hasClass("pink") &&
    !$("#right").hasClass("pink")
  ) {
    $("#answer").text("Neither A nor B");
  }
});
