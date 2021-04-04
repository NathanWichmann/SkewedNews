var displayContent = document.querySelector("#display-content");

var categoryName = localStorage.getItem("categoryName");
var capCategoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
console.log(capCategoryName);

var fetchedResult = JSON.parse(localStorage.getItem("passedData"));
console.log(fetchedResult);
function run() {
    $(searchedTitle).text(capCategoryName);
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