$(document).ready(function () {
  $(".addCart-btn").click(function (e) {
    $(this)
      .parent()
      .toggleClass("active")
      .find(".item-name")
      .toggleClass("active");
  });
});
