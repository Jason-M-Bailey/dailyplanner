// SAVE TO LOCAL STORAGE 
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

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

  // AFTER SAVE, GET TEXT FROM LOCAL STORAGE
  $("#hr-30 .description").val(localStorage.getItem("hr-30"));
  $("#hr-31 .description").val(localStorage.getItem("hr-31"));
  $("#hr-32 .description").val(localStorage.getItem("hr-32"));
  $("#hr-33 .description").val(localStorage.getItem("hr-33"));
  $("#hr-34 .description").val(localStorage.getItem("hr-34"));
  $("#hr-35 .description").val(localStorage.getItem("hr-35"));
  $("#hr-36 .description").val(localStorage.getItem("hr-36"));
  $("#hr-37 .description").val(localStorage.getItem("hr-37"));
  $("#hr-38 .description").val(localStorage.getItem("hr-38"));
  $("#hr-39 .description").val(localStorage.getItem("hr-39"));
  $("#hr-40 .description").val(localStorage.getItem("hr-40"));
  $("#hr-41 .description").val(localStorage.getItem("hr-41"));
  $("#hr-42 .description").val(localStorage.getItem("hr-42"));
  $("#hr-43 .description").val(localStorage.getItem("hr-43"));
  $("#hr-44 .description").val(localStorage.getItem("hr-44"));
  $("#hr-45 .description").val(localStorage.getItem("hr-45"));
  $("#hr-46 .description").val(localStorage.getItem("hr-46"));
  $("#hr-47 .description").val(localStorage.getItem("hr-47"));

  $("#tomorrow").text(moment().add(1, "days").format("dddd, MMMM Do")); // adds 1 day to moment.js
});

// DELETE APPOINTMENT & REFRESH PAGE
$(document).ready(function () {
  $(".deleteBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.removeItem(time, value);
    location.reload();
  });
});

// STICKY DATETIME ON SCROLL
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("tomorrow");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// DELAY APPOINTMENT ONE HOUR
$(document).ready(function () {
  $(".delayAppt").on("click", function () {
    var value = $(this).siblings(".description").val();
    var nextId = $(this).attr("data-next-id");
    var time = $(this).parent().attr("id");

    localStorage.setItem(nextId, value);
    localStorage.removeItem(time, value);
    location.reload();
  });
});