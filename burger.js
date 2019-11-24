$(".burger-container").on("click", function(){
  if($("div.line.move").hasClass("closed")){
    $("div.line.closed").removeClass('closed');
    console.log("321");
  }
  else{
    $("div.line.closed").addClass('closed');
    console.log("123");

  }

});
