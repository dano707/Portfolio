$(".hamburger").on("click", function(){
// $(".navigation-bar-items").css("display","block");
$(".navigation-bar-items").slideToggle("slow");
$(".hamburger").toggleClass("is-active");


});
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
