// save to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  // after save, get the text from local storage
  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
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
});

// move appt down one hour
$(document).ready(function () {
  $(".delayAppt").on("click", function () {
    var value = $(this).siblings(".description").val();
    // console.log(value);
    var nextId = $(this).attr("data-next-id");
    var time = $(this).parent().attr("id");
    // console.log(this);

    localStorage.setItem(nextId, value);
    localStorage.removeItem(time, value);
    location.reload(); // refresh the page so the text disappears
  });
});

// dynamic clock displaying current time
var dynamicClock = null,
  date = null;

var update = function () {
  date = moment(new Date());
  dynamicClock.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
  dynamicClock = $("#dynamicClock");
  update();
  setInterval(update, 1000);
});

// color code hour blocks by past, current, future
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

// delete text from time block
$(document).ready(function () {
  $(".deleteBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.removeItem(time, value);
    location.reload(); // refresh the page so the text disappears
  });
});

// STICKY dynamicClock ON SCROLL
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("dynamicClock");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// check what is in local storage
console.log(localStorage);
