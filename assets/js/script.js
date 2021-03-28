var submitButton = document.getElementById("submit-button");
var outputs = document.getElementById("outputs");
var topHeadline;



// The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider,
// magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview,
// technology, theater, t-magazine, travel, upshot, us, and world.




function getTopHeadlineNews() {
    var topic = $("#selectedOption :selected").text();
    // console.log(topic);
    var apiURL = 'https://api.nytimes.com/svc/topstories/v2/' + topic + '.json?api-key=VYG56iuOROV7djK9Bd23ePHnTOs1ea1S';
    // console.log(apiURL);
    fetch(apiURL).then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                localStorage.setItem('topHeadline', JSON.stringify(data));
                topHeadline = (JSON.parse(localStorage.getItem("topHeadline")));
                console.log(topHeadline);
                console.log(topHeadline.results);
                // console.log(data);
                for (var i = 0; i < 10; i++) {
                    var card = $("<div>").addClass("card");
                    var cardBody = $("<div>").addClass("card-body");
                    var image = $("<img>").attr("src", topHeadline.results[i].multimedia[2].url);
                    var cardTitle = $("<h4>").addClass("card-title").text(topHeadline.results[i].title);
                    var cardText = $("<p>").addClass("card-text").text(topHeadline.results[i].abstract);
                    var cardDate = $("<p>").addClass("card-text").text(topHeadline.results[i].created_date.substring(0,10));
                    $(outputs).append(card.append(cardBody.append(image, cardTitle, cardDate, cardText)));
                }
                return;
            });
        } else {
            alert("Error");
        }
    });
};


submitButton.addEventListener("click", getTopHeadlineNews);