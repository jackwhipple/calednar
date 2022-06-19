var inputBoxes = document.querySelectorAll(".input");

var json = { data: [] };

$.get("/writings", function (jsonUpdated) {
  json = jsonUpdated;
  for (var i = 0; i < inputBoxes.length; i++) {
    var input = inputBoxes[i];
    input.value = json.data[i];
  }
});

window.onbeforeunload = function () {
  for (var i = 0; i < inputBoxes.length; i++) {
    var input = inputBoxes[i];
    json.data[i] = input.value;
    $.post("/writings", json);
  }
};
