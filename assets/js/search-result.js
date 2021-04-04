var displayContent = document.querySelector("#display-content");
var searchedTitle = document.getElementById("searchedTitle");

var selectedCategory = localStorage.getItem("selectedCategory");
var selectedCountry = localStorage.getItem("selectedCountry");
var capSelectedCategory = selectedCategory[0].toUpperCase() + selectedCategory.slice(1);

if (selectedCountry === "us") {
    selectedCountry = "USA";
}
if (selectedCountry === "gb") {
    selectedCountry = "United Kingdom";
}
if (selectedCountry === "in") {
    selectedCountry = "India";
}
if (selectedCountry === "au") {
    selectedCountry = "Australia";
}



console.log(capSelectedCategory);
console.log(selectedCountry);

var fetchedResult = JSON.parse(localStorage.getItem("searchedData"));
console.log(fetchedResult);

function run() {
    $(searchedTitle).text("Searched for " + capSelectedCategory + " & " + selectedCountry);

    for (var i = 0; i < 20; i++) {
        var card = $("<div>").css({
            "margin-top" : "60px", 
            "border-bottom": "5px solid grey", 
            "border-top": "5px solid grey", 
            "background-color" : "#212121",
            "text-align" : "center"
        });
        var title = $("<span>").addClass("white-text").text(fetchedResult.articles[i].title).css({"font-size" : "24px"});
        var cardContainer = $("<div>").css({"text-align" : "center"});
        var cardImg = $("<img>").attr("src", fetchedResult.articles[i].urlToImage).height(300).width(400);
        var link = $("<a>").attr("href", fetchedResult.articles[i].url).text("Click for more").css({"font-size" : "18px"});
        $("#display-content").append(card.append(title).append(cardContainer.append(cardImg), link));
    }
}

run();