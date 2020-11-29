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
  if ($(this).scrollTop() >= $('#introduction').position().top - 1000 && !passIntroduction) {
    passIntroduction = true
    console.log('I have passed introduction');
  }
}