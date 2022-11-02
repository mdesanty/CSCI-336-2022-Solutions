$(document).ready(function() {
  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    let formData = $("#my-form").serializeArray().reduce(function(map, field) { map[field.name] = field.value; return map; }, {});
    console.log(formData);
  });
});