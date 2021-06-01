// save to local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  // after save, get the text from local storage
  $("#hr-6 .description").val(localStorage.getItem("hr-6"));
  $("#hr-7 .description").val(localStorage.getItem("hr-7"));
  $("#hr-8 .description").val(localStorage.getItem("hr-8"));
  $("#hr-9 .description").val(localStorage.getItem("hr-9"));
  $("#hr-10 .description").val(localStorage.getItem("hr-10"));
  $("#hr-11 .description").val(localStorage.getItem("hr-11"));
  $("#hr-12 .description").val(localStorage.getItem("hr-12"));
  $("#hr-13 .description").val(localStorage.getItem("hr-13"));
  $("#hr-14 .description").val(localStorage.getItem("hr-14"));
  $("#hr-15 .description").val(localStorage.getItem("hr-15"));
  $("#hr-16 .description").val(localStorage.getItem("hr-16"));
  $("#hr-17 .description").val(localStorage.getItem("hr-17"));
  $("#hr-18 .description").val(localStorage.getItem("hr-18"));
  $("#hr-19 .description").val(localStorage.getItem("hr-19"));
  $("#hr-20 .description").val(localStorage.getItem("hr-20"));
  $("#hr-21 .description").val(localStorage.getItem("hr-21"));
  $("#hr-22 .description").val(localStorage.getItem("hr-22"));
  $("#hr-23 .description").val(localStorage.getItem("hr-23"));
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
