$(document).ready(function() {

$('.booking a').click(function(event) {
event.preventDefault();

part = $(this).attr('href'); // lấy id của thẻ h2 tương ứng

position = $(part).offset().top; // tìm vị trí thẻ h2

$('html, body').animate({scrollTop: position},1400,'easeInOutSine');
});
});
