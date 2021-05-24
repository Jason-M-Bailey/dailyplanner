// add days forward/back buttons

$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save in localStorage
      localStorage.setItem(time, value);
  
      // Show notification that item was saved to localStorage by adding class 'show'
      $('.notification').addClass('show');
  
      // Timeout to remove 'show' class after 5 seconds
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $('#hour-6 .description').val(localStorage.getItem('hour-6'));
    $('#hour-7 .description').val(localStorage.getItem('hour-7'));
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));
    $('#hour-22 .description').val(localStorage.getItem('hour-22'));
    $('#hour-23 .description').val(localStorage.getItem('hour-23'));
  
  
    // display next  day on page
    // $('#currentDay').text(moment().format('dddd, MMMM Do'));
    $('#currentDay').text(moment().format('dddd, MMMM Do'));

  });
  
  // deleteBtn 
  // how to get the date to delete on click?
  $(document).ready(function () {
    $('.deleteBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.removeItem(time, value);
      
      $('.deleteNotification').addClass('show');
      setTimeout(function () {
      
        $('.deleteNotification').removeClass('show');
      }, 5000);
      // something something clear value 
      removeItem(time, value);
    });
  });