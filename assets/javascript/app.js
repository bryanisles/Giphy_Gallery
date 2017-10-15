var btnCounter = 0;

$(document).on("click","#mySubmit", function(event){
	var tempSearchValue = $("#mySearch").val().trim();
	var tempBtn = $("<button>");
	
	if(btnCounter % 2 === 0){
		tempBtn.attr({
			class: "btn btn-secondary",
			id: "myBtn-" + btnCounter
		});
	} else {
		tempBtn.attr({
			class: "btn btn-default",
			id: "myBtn-" + btnCounter
		});
	}
	tempBtn.attr("data-value",tempSearchValue);
	tempBtn.text(tempSearchValue);
	$("#myBtnContainer").append(tempBtn);
	btnCounter++;
})

$(document).on("click","button[id*='myBtn-']",function(event){
	// Place all giphy in id="myGiphyContainer" using "div.car-img-top>div.card-body>h4" with a value of Card title
	console.log($(this).attr("data-value"));
	var tempQueryValue = $(this).attr("data-value");
	var apiKey = "";
	var queryURL = "";

	$.ajax({
		url:queryURL,
		method,"GET"
	}).done(function(response){

	})
})