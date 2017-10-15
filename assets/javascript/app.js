var btnCounter = 0;
var tempStorage = [];

$(document).on("click","#mySubmit", function(event){
	
	//console.log(($("button[id*='myBtn-']").attr("data-btnValue")).indexOf($("#mySearch").val()));
	var tempSearchValue = $("#mySearch").val().trim();
	var tempBtn = $("<button>");
	tempBtn.attr({
		class: "btn",
		id: "myBtn-" + btnCounter
	});
	if(btnCounter % 2 === 0){
		tempBtn.addClass("btn-secondary");
	} else {
		tempBtn.addClass("btn-default");
	}
	tempBtn.attr("data-btnValue",tempSearchValue);
	tempBtn.attr("data-value",btnCounter);
	tempBtn.text(tempSearchValue);
	$("#myBtnContainer").append(tempBtn);
	btnCounter++;
})

$(document).on("click","button[id*='myBtn-']",function(event){
	// Place all giphy in id="myGiphyContainer" using "div.car-img-top>div.card-body>h4" with a value of Card title
	// https://api.giphy.com/v1/gifs/
	//  search
	//  ?api_key=2m4rWNVpTqAABADj01J4SoyUB8USPBjM
	//  &q=nissan
	//  &limit=25
	//  &rating=g
	//  &rating=pg
	//  &lang=en

	console.log($(this).attr("data-value"));
	var tempQueryValue = $(this).attr("data-value");
	var apiKey = "?api_key=" + "2m4rWNVpTqAABADj01J4SoyUB8USPBjM";
	var giphyURL = "https://api.giphy.com/v1/gifs/";
	var queryType = "search";
	var tempSearch = "&q=" + $(this).attr("data-btnValue");
	var maxNumResults = "&limit=" + 10;
	var myRatings = "&rating=" + "g" + "&rating=" + "pg";
	var queryURL = giphyURL + queryType + apiKey + tempSearch + maxNumResults + myRatings;
	

	console.log(queryURL);

	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(response){
		console.log(response);
		
	});
});