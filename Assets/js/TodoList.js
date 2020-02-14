$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new Todo Text from input
		var TodoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + TodoText + "</li>");
	}
});

//Click on X to delete Todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	event.stopPropagation();
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});