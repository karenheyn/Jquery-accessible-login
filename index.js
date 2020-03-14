$(document).ready(function() {
  $(".submit-button").click(function(evt) {
    evt.preventDefault();
    console.log(evt);
    if (
      $("#password")
        .val()
        .match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
    ) {
      validate();
    } else {
      $(".helper-text").attr("style", "display: block");
    }
  });
  function validate() {
    if (
      $("#username").val() === "level" &&
      $("#password").val() === "Access123"
    ) {
      toggleModal();
    }
  }
  function toggleModal() {
    $(".modal").attr("style", "display: block");
    $("label, input, button, a .helper-text").each(function(index) {
      $(this).attr("tabIndex", "-1");
    });
    $(".modal p, .modal span").each(function(index) {
      $(this).removeAttr("tabIndex");
    });
    $("p").attr("tabIndex", "0");
    $("span").attr("tabIndex", "0");
    $("span").click(function(evt) {
      evt.preventDefault();
      $(".modal").attr("style", "display: none");
      window.location.href = "index2.html";
    });
    $("span").keydown(function(evt) {
      evt.preventDefault();
      $(".modal").attr("style", "display: none");
      window.location.href = "index2.html";
    });
  }
});
