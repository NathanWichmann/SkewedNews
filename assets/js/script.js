var mostPopular = document.getElementById("most-popular");
var mostPopularContent = document.getElementById("most-popular-content");

console.log(mostPopular.innerHTML);
console.log(mostPopularContent.innerHTML);

var newsContent;

function getTopHeadlineNews() {
    // var apiURL = 'http://api.mediastack.com/v1/news?&sources=en&access_key=8fcb8dd3df70c7830e622a83fed5dd6f';


    var apiURL = 'https://api.mediastack.com/v1?sources&sources=en&access_key=8fcb8dd3df70c7830e622a83fed5dd6f&search=bbc';
    fetch(apiURL).then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                localStorage.setItem('news', JSON.stringify(data));
                newsContent = (JSON.parse(localStorage.getItem("news")));
                console.log(data);
                return;
            });
        } else {
            alert("Error");
        }
    });
};
getTopHeadlineNews();

var inputEl = $('#input-search')

var searchBtn = $('#searchBtn');

var apikey = "83c7d26f8a3344048899256bb42d6bf1"


fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        console.log (data.articles[i])



    }
});


fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        console.log (data.articles[i])



    }
});

fetch('https://saurav.tech/NewsAPI/everything/fox-news.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        console.log (data.articles[i].url)



    }
});

fetch('https://saurav.tech/NewsAPI/everything/google-news.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        console.log (data.articles[i].content)



    }
});

searchBtn.on('click', function () {

    inputEl = input.val()
    console.log(input.val());
    
});

// submitButton.addEventListener("click", getTopHeadlineNews);

// for (var i = 0; i < 10; i++) {
//     var card = $("<div>").addClass("card");
//     var cardBody = $("<div>").addClass("card-body");
//     var image = $("<img>").attr("src", topHeadline.results[i].multimedia[2].url);
//     var cardTitle = $("<h4>").addClass("card-title").text(topHeadline.results[i].title);
//     var cardText = $("<p>").addClass("card-text").text(topHeadline.results[i].abstract);
//     var cardDate = $("<p>").addClass("card-text").text(topHeadline.results[i].created_date.substring(0,10));
//     $(outputs).append(card.append(cardBody.append(image, cardTitle, cardDate, cardText)));git staus
