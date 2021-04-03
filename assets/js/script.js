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

// searchBtn.on('click', function () {

//     inputEl = input.val()
//     console.log(input.val());
    
// });

// // modal ------------------------
// var instance = M.Modal.getInstance(elem);

//   instance.open();
//   instance.close();
//   instance.destroy();

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
//   });
  

fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/us.json ')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for ( i = 0; i < 5; i++) { 
        console.log (data.articles[i]);
        $(".cc" + i).css({"background-image" : "url(" + data.articles[i].urlToImage + ")", "background-repeat":  "no-repeat"});
        $("#published-date" + i).text(data.articles[i].publishedAt);
        $("#source" + i).text(data.articles[i].source.name);
        $("#author" + i).text(data.articles[i].author);
        $("#title-content" + i).text(data.articles[i].title);
        $("#description" + i).text(data.articles[i].description);
        $("#url" + i).attr("href", data.articles[i].url).attr({"target" : "_blank"});
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
