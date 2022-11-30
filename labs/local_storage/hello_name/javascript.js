$(document).ready(function() {
  showGreeting();

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    let value = $("#name").val()

    if (value.length > 0) {
      $("#name").removeClass("is-invalid");
      window.localStorage.setItem("name", `Hello ${value}!`);
      showGreeting();
    }
    else {
      $("#name").addClass("is-invalid");
    }
  });
});

function showGreeting() {
  let greeting = "Enter your name to receive a greeting.";

  if (window.localStorage.getItem("name") !== null)
    greeting = window.localStorage.getItem("name");

  console.log(greeting);
  $("#greeting").text(greeting);
}