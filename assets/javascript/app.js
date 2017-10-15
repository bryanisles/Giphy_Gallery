var btnCounter = 0;
var tempStorage = [];

$(document).on("click","#mySubmit", function(event){
	event.preventDefault();
	var tempSearchValue = $("#mySearch").val().trim();
	
	if (tempStorage.indexOf(tempSearchValue) === -1) {	
		tempStorage.push(tempSearchValue);
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
	}
});

function clearGifContainer() {
	$("#myGiphyContainer").empty();
}


$(document).on("click","button[id*='myBtn-']",function(event){
	event.preventDefault();
	clearGifContainer();
	var tempQueryValue = $(this).attr("data-value");
	var apiKey = "?api_key=" + "2m4rWNVpTqAABADj01J4SoyUB8USPBjM";
	var giphyURL = "https://api.giphy.com/v1/gifs/";
	var queryType = "search";
	var tempSearch = "&q=" + $(this).attr("data-btnValue");
	var maxNumResults = "&limit=" + 25;
	var myRatings = "&rating=" + "g" + "&rating=" + "pg";
	var queryURL = giphyURL + queryType + apiKey + tempSearch + maxNumResults + myRatings;
	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(response){
		console.log(response.data.length);
		for(var i = 0; i < response.data.length; i++) {
			var tempRatings = response.data[i].rating;
			var tempImgStill = response.data[i].images.fixed_width_still.url;
			var tempImgGif = response.data[i].images.fixed_width.url;
			var tempNarrative = response.data[i].title;	
			var tempDivCard = $("<div>");
			tempDivCard.attr({
				class: "card float-left",
				style: "width:20em;"
			});
			var tempDivCardImg = $("<img>");
			tempDivCardImg.attr({
				class: "card-img-top",
				id: "myGif-" + i,
				src: tempImgStill
			});
			// tempDivCardImg.attr("class","card-img-top");
			// tempDivCardImg.attr("id","myGif-" + i);
			tempDivCardImg.attr("data-still", tempImgStill);
			tempDivCardImg.attr("data-animate", tempImgGif);
			tempDivCardImg.attr("data-status","still");
			// tempDivCardImg.attr("src",tempImgStill);
			var tempDivCardBody = $("<div>");
			tempDivCardBody.attr("class","card-body");
			var tempHFour = $("<h6>");
			tempHFour.attr("class","card-title");
			tempHFour.html(tempNarrative);
			var tempPara = $("<p>");
			tempPara.attr("class","card-text");
			tempPara.html("Rated: " + tempRatings);
			tempDivCardBody.append(tempHFour);
			tempDivCardBody.append(tempPara);
			tempDivCard.append(tempDivCardImg);
			tempDivCard.append(tempDivCardBody);
			$("#myGiphyContainer").append(tempDivCard);
		}
		
	});
});

$(document).on("click","img[id*='myGif-']",function(event){
	if($(this).attr("data-status") === "still") {
		$(this).attr("src",$(this).attr("data-animate"));
		$(this).attr("data-status","animate");
	} else {
		$(this).attr("src",$(this).attr("data-still"));
		$(this).attr("data-status","still");
	}
})