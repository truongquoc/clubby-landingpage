const order = ['event-cmt', 'calendar-cmt', 'manage-cmt', 'connect-cmt', 'share-cmt']
const orderWrap = ['wrap-calender', 'wrap-clock', 'wrap-user', 'wrap-share', 'wrap-heart']
const orderContent = ['calender', 'clock', 'user', 'share', 'heart']
let i = 0;
setInterval(() => {
    $('#event-1').removeClass();
    $('#event-2').removeClass();
    $('#event-3').removeClass();
    $('#event-4').removeClass();
    $('#event-5').removeClass();

    $('#event-wrap-1').removeClass();
    $('#event-wrap-2').removeClass();
    $('#event-wrap-3').removeClass();
    $('#event-wrap-4').removeClass();
    $('#event-wrap-5').removeClass();

    $('#event-content-1').removeClass();
    $('#event-content-2').removeClass();
    $('#event-content-3').removeClass();
    $('#event-content-4').removeClass();
    $('#event-content-5').removeClass();
  if(i == 5) {
    i=0;
  }
  if(i == 0) {
    $('#event-1').addClass('event-cmt');
    $('#event-2').addClass('calendar-cmt');
    $('#event-3').addClass('manage-cmt');
    $('#event-4').addClass('connect-cmt');
    $('#event-5').addClass('share-cmt');

    $('#event-wrap-1').addClass('wrap-calender');
    $('#event-wrap-2').addClass('wrap-clock');
    $('#event-wrap-3').addClass('wrap-user');
    $('#event-wrap-4').addClass('wrap-share');
    $('#event-wrap-5').addClass('wrap-heart');

    $('#event-content-1').addClass('calender');
    $('#event-content-2').addClass('clock');
    $('#event-content-3').addClass('user');
    $('#event-content-4').addClass('share');
    $('#event-content-5').addClass('heart');
  }
  if(i == 1) {
    $('#event-1').addClass('share-cmt');
    $('#event-2').addClass('event-cmt');
    $('#event-3').addClass('calendar-cmt');
    $('#event-4').addClass('manage-cmt');
    $('#event-5').addClass('connect-cmt');

    $('#event-wrap-1').addClass('wrap-heart');
    $('#event-wrap-2').addClass('wrap-calender');
    $('#event-wrap-3').addClass('wrap-clock');
    $('#event-wrap-4').addClass('wrap-user');
    $('#event-wrap-5').addClass('wrap-share');

    $('#event-content-1').addClass('heart');
    $('#event-content-2').addClass('calender');
    $('#event-content-3').addClass('clock');
    $('#event-content-4').addClass('user');
    $('#event-content-5').addClass('share');
  }
  if(i == 2) {
    $('#event-1').addClass('connect-cmt');
    $('#event-2').addClass('share-cmt');
    $('#event-3').addClass('event-cmt');
    $('#event-4').addClass('calendar-cmt');
    $('#event-5').addClass('manage-cmt');

    $('#event-wrap-1').addClass('wrap-share');
    $('#event-wrap-2').addClass('wrap-heart');
    $('#event-wrap-3').addClass('wrap-calender');
    $('#event-wrap-4').addClass('wrap-clock');
    $('#event-wrap-5').addClass('wrap-user');

    $('#event-content-1').addClass('share');
    $('#event-content-2').addClass('heart');
    $('#event-content-3').addClass('calender');
    $('#event-content-4').addClass('clock');
    $('#event-content-5').addClass('user');
  }
  if(i == 3) {
    $('#event-1').addClass('manage-cmt');
    $('#event-2').addClass('connect-cmt');
    $('#event-3').addClass('share-cmt');
    $('#event-4').addClass('event-cmt');
    $('#event-5').addClass('calendar-cmt');

    $('#event-wrap-1').addClass('wrap-user');
    $('#event-wrap-2').addClass('wrap-share');
    $('#event-wrap-3').addClass('wrap-heart');
    $('#event-wrap-4').addClass('wrap-calender');
    $('#event-wrap-5').addClass('wrap-clock');

    $('#event-content-1').addClass('user');
    $('#event-content-2').addClass('share');
    $('#event-content-3').addClass('heart');
    $('#event-content-4').addClass('calender');
    $('#event-content-5').addClass('clock');
  }
  if(i == 4) {
    $('#event-1').addClass('calendar-cmt');
    $('#event-2').addClass('manage-cmt');
    $('#event-3').addClass('connect-cmt');
    $('#event-4').addClass('share-cmt');
    $('#event-5').addClass('event-cmt');

    $('#event-wrap-1').addClass('wrap-clock');
    $('#event-wrap-2').addClass('wrap-user');
    $('#event-wrap-3').addClass('wrap-share');
    $('#event-wrap-4').addClass('wrap-heart');
    $('#event-wrap-5').addClass('wrap-calender');

    $('#event-content-1').addClass('clock');
    $('#event-content-2').addClass('user');
    $('#event-content-3').addClass('share');
    $('#event-content-4').addClass('heart');
    $('#event-content-5').addClass('calender');
  }
  i++;
}, 2000);