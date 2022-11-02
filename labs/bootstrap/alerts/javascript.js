$(document).ready(function() {
  const blueAlertButton = $("#blue-alert-btn");
  const greenAlertButton = $("#green-alert-btn");
  const yellowAlertButton = $("#yellow-alert-btn");
  const purpleAlertButton = $("#purple-alert-btn");
  const clearAlertsButton = $("#clear-alerts-btn");

  blueAlertButton.on("click", function(e) {
    addAlert("alert-primary", "Blue alert added!");
  });

  greenAlertButton.on("click", function(e) {
    addDismissibleAlert("alert-success", "Green alert added!");
  });

  yellowAlertButton.on("click", function(e) {
    addAlert("alert-warning", "Yellow alert added!");
  });

  purpleAlertButton.on("click", function(e) {
    addDismissibleAlert("alert-purple", "Purple alert added!");
  });

  clearAlertsButton.on("click", function(e) {
    $(".alert").alert("close");
  });

  function addAlert(alertClass, alertMessage) {
    const alertHtml =
    `<div class="alert ${alertClass} fade show" role="alert">` +
      alertMessage +
    "</div>"

    const alert = $(alertHtml);
    $("#alerts").append(alert);
  }

  function addDismissibleAlert(alertClass, alertMessage) {
    const alertHtml =
    `<div class="alert ${alertClass} alert-dismissible fade show" role="alert">` +
      alertMessage +
      '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
      "</button>" +
    "</div>"

    const alert = $(alertHtml);
    $("#alerts").append(alert);
  }
});