$(document).ready(function () {
  $(".nav-links .nav-link").click(function () {
    var page = $(this).attr("page");
    $(".pageContent .container").html(
      '<div class="text-center spinner-border text-primary" style="margin-left:50%;margin-top:40%;" role="status"><span class="visually-hidden">Loading...</span></div>'
    );

    $.get(page, function (res) {
      $(".pageContent .container").html(res);
    });
    // $(".pageContent .container").load(page)
  });
});
