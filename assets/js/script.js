var mostPopular = document.getElementById("most-popular");
var mostPopularContent = document.getElementById("most-popular-content");
var topHeadlinesImage = document.getElementById("url-to-image");
var topHeadlinesTitle = document.getElementById("title-content");
var topHeadlinesUrl = document.getElementById("url");
var searchedButton1 = document.getElementById("search-button1");
var selectedCountry;
var selectedCategory;
var selectedNewsSource;

function startUp() {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/us.json ')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    // console.log(data);
    for ( i = 0; i < 5; i++) { 
        // console.log (data.articles[i]);
        $(".cc" + i).css({
            "background-image" : "url(" + data.articles[i].urlToImage + ")",
            "background-repeat":  "no-repeat"
        });
        $("#title-content" + i).text(data.articles[i].title);
        $("#url" + i).attr("href", data.articles[i].url).attr({"target" : "_blank"});
    }
});
}

function clickedTab(a) {
    var value = $(a).data("value");
    fetch("https://saurav.tech/NewsAPI/everything/" + value + ".json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        for ( i = 0; i < 5; i++) { 
            // console.log (data.articles[i]);
            $(".cc" + i).css({
                "background-image" : "url(" + data.articles[i].urlToImage + ")",
                "background-repeat":  "no-repeat"
            });
            $("#title-content" + i).text(data.articles[i].title);
            $("#url" + i).attr("href", data.articles[i].url).attr({"target" : "_blank"});
        }
    });

}

function clickedCategory(a) {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/" + a.parentElement.parentElement.id + "/us.json ")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem("categoryName", a.parentElement.parentElement.id)
        displayResults(data);
    });
}

function displayResults(data) {
    var myData = data;
    localStorage.setItem("passedData", JSON.stringify(myData));
    location.assign("./category-result.html");
}

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$(document).ready(function(){
    $('.tabs').tabs();
    $('.modal').modal();
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $("select.country").change(function(){
        selectedCountry = $(this).children("option:selected").val();
        console.log(selectedCountry);
    });
    $("select.category").change(function(){
        selectedCategory = $(this).children("option:selected").val();
        console.log(selectedCategory);
    });
    $("select.news-source").change(function(){
        selectedNewsSource = $(this).children("option:selected").val();
        console.log(selectedNewsSource);
    });
});

$("#search-button1").on("click", function() {
    console.log(selectedCountry + " and " + selectedCategory);
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/" + selectedCategory + "/" + selectedCountry + ".json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for ( i = 0; i < 20; i++) { 
            var searchedData = data;
        }
        getSearchedResult(searchedData);
    });
});

function getSearchedResult(data) {
    var myData = data;
    localStorage.setItem("selectedCountry", selectedCountry);
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("searchedData", JSON.stringify(myData));
    location.assign("./search-result.html");
}

$("#search-button2").on("click", function() {
    console.log(selectedNewsSource);
    fetch("https://saurav.tech/NewsAPI/everything/" + selectedNewsSource + ".json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for ( i = 0; i < 20; i++) { 
            var searchedData = data;
        }
        getSearchedResult2(searchedData);
    });
});

function getSearchedResult2(data) {
    var myData = data;
    localStorage.setItem("selectedSource", selectedNewsSource);
    localStorage.setItem("searchedData2", JSON.stringify(myData));
    location.assign("./search-result2.html");
}

startUp();