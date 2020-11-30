let passHeader = false
let passIntroduction = false
// Start at the top
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});
// Check when you start scrolling
$(document).on('scroll', function() {
  checkIntroductionScroll();
})

function checkIntroductionScroll() {
  if ($(this).scrollTop() >= $('#introduction').position().top - 800 && !passIntroduction) {
    passIntroduction = true
    console.log('I have passed introduction');
    $("#phone-piece-1").addClass("start-slide-1");
    $("#phone-piece-2").addClass("start-slide-2");
  }
}