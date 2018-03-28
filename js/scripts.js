function leapYear(year) {
  if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
    return true;
  } else {
    return false;
  }
}

$(function() {
  $(".form1").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#year").val());
    if (year) {
      $(".result").show();
      $("#input").text(year);
      var result = leapYear(year);
      if (!result) {
        $("#not").text("not ");
      }else {
        $("#not").text("");
      }
    }else {
      alert("Please enter a number!");
    }

  });
});
