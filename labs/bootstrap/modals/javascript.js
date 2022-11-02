$(document).ready(function() {
  $("#add-item-btn").on("click", function(e) {
    e.preventDefault();

    if($("#item-input").val().length > 0) {
      const listItem = $(`<li class="list-group-item">${$("#item-input").val()}</li>`);
      $("#my-list").append(listItem);

      $("#item-input").val("");
      $("#item-input").removeClass("is-invalid");
      $("#add-item-modal").modal("hide");
    }
    else {
      $("#item-input").addClass("is-invalid");
    }
  });
});