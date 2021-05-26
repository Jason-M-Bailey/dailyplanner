// add days forward/back buttons

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
    // $(".notification").addClass("show");
    $(".notification-2").addClass("show");
    setTimeout(function () {
      // $(".notification").removeClass("show");
      $(".notification-2").removeClass("show");
    }, 2000);
  });

  // var interval = setInterval(hourUpdater, 15000);

  $("#hour-6 .description").val(localStorage.getItem("hour-6"));

  console.log()

  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));
  $("#hour-23 .description").val(localStorage.getItem("hour-23"));
  //setInterval(hourUpdater, 1000);
});

// how to get this to update every second?
// $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// 2ND ATTEMPT AT DYNAMIC SECONDS
var datetime = null,
date = null;

var update = function () {
date = moment(new Date());
datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
datetime = $("#datetime");
update();
setInterval(update, 1000);
});

//

//
function hourUpdater() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourUpdater();
//

$(document).ready(function () {
  $(".deleteBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.removeItem(time, value);

    $(".notification-2").addClass("show");
    setTimeout(function () {
      $(".notification-2").removeClass("show");
      location.reload();
    }, 2000);

    // something something clear value
    // removeItem(time, value);
    // location.reload();
  });
});

//copy to clipboard
// var copyBtn = document.getElementsByClassName(".copy");
// var textArea = document.getElementsByClassName(".textarea");

// function () {
// copyBtn.addEventListener("click", () => {
//   textArea.select();
//   document.execCommand("copy");
//   alert("Password Copied");
// });
// };
