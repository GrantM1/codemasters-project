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
})