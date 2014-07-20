$(function () {
  $(document.body).click(function (e) {
    target = $(e.target);
    textLength = target.text().length;

    if ((e.target.children.length == 0) &&
        (4 <= textLength) && (textLength <= 20)) {
      target.text("＼\\٩('ω')و/／");
    }
  });
});
