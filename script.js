$(document).ready(function () {
 // toggle button 
 $('.btn').click(function () {
  $('.nav-links').slideToggle(900);
  $('.btn').toggleClass('change');
 })
 // transparent background
 $(window).scroll(function () {
  let position = $(window).scrollTop();
  if (position >= 100) {
   $('nav, nav-container').addClass('navBackground')
  } else {
   $('nav, nav-container').removeClass('navBackground')
  }
 })
 // smooth scroll

 $('.nav-links a').click(function (link) {
  link.preventDefault();
  let target = $(this).attr('href');
  $('html, body').stop().animate({
   scrollTop: $(target).offset().top
  }, 1800);
 })
 //owl team
 $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 2500,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 3
   },
   1000: {
    items: 5
   }
  }
 })
})