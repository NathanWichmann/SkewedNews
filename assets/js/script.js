var mostPopular = document.getElementById("most-popular");
var mostPopularContent = document.getElementById("most-popular-content");
var topHeadlinesImage = document.getElementById("url-to-image");
var topHeadlinesDate = document.getElementById("published-date");
var topHeadlinesTitle = document.getElementById("title-content");
var topHeadlinesDesc = document.getElementById("description");
var topHeadlinesAuthor = document.getElementById("author");
var topHeadlinesSource = document.getElementById("source");
var topHeadlinesUrl = document.getElementById("url");

//////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        // console.log (data.articles[i])



    }
});


fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        // console.log (data.articles[i])



    }
});

fetch('https://saurav.tech/NewsAPI/everything/fox-news.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        // console.log (data.articles[i].url)
        



    }
});

fetch('https://saurav.tech/NewsAPI/everything/google-news.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);

    for ( i = 0; i < data.articles.length; i++) { 
        // console.log (data.articles[i].content)



    }
});

//////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/us.json ')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

    for ( i = 0; i < 5; i++) { 
        console.log (data.articles[i])
        // topHeadlinesImage.src = data.articles[i].urlToImage;
        // topHeadlinesDate.innerHTML = data.articles[i].publishedAt;
        topHeadlinesTitle.innerHTML = data.articles[i].title;
        topHeadlinesDesc.innerHTML = data.articles[i].description;
        // topHeadlinesAuthor.innerHTML = data.articles[i].author;
        // topHeadlinesSource.innerHTML = data.articles[i].source.name;
        topHeadlinesUrl.href = data.articles[i].url;
        $(".cc" + i).css({"background-image" : "url(" + data.articles[i].urlToImage + ")", "background-repeat":  "no-repeat"});

    }
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



$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});