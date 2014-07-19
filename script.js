$(function () {
  $(document.body).click(function (e) {
    target = $(e.target);
    console.log(target.text());
    if ((e.target.children.length == 0) &&
        (4 < target.text().length) &&
        (target.text().length < 20)) {
      target.text("＼\\٩('ω')و/／");
    }
  });
});
