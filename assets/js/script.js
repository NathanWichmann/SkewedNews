var mostPopular = document.getElementById("most-popular");
var mostPopularContent = document.getElementById("most-popular-content");
var topHeadlinesImage = document.getElementById("url-to-image");
var topHeadlinesTitle = document.getElementById("title-content");
var topHeadlinesUrl = document.getElementById("url");
var searchedButton1 = document.getElementById("search-button1");
var weatherButton = document.getElementById("weather-button");
var enteredCity = document.getElementById("entered-city");
var selectedCountry;
var selectedCategory;
var selectedNewsSource;
var weatherData;
var selectedCurrency1;
var selectedCurrency2;
var currency2Rate;
var currency1Rate;
var passedCurrency;
var passedCurrency2;

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

function getWeather() {
    var city = enteredCity.value;
    capCity = city[0].toUpperCase() + city.slice(1);
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + capCity + '&units=metric&appid=d7d5dab732ecba57b1f82869e14b868c';
    fetch(apiURL).then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                weatherData = data;
                // console.log(weatherData);
                displayWeather();           
                return;
            });
        } else {
            alert("City Not Found...");
        }
    });
};

function currentTime() {
    $("#time").text(moment().format('h:mm:ss a'));
}

function displayWeather() {
    $("#weather-display").css({"display" : "block"});
    var desc = weatherData.weather[0].description;
    capDesc = desc[0].toUpperCase() + desc.slice(1);
    var weatherIcon = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';
    $("#city-name").text(weatherData.name + " " + weatherData.sys.country);
    $("#date").text(moment.unix(weatherData.dt).format('MMMM Do YYYY'));
    $("#temp-desc").text(capDesc);
    $("#current-temp").text("Temperature: " + parseInt(weatherData.main.temp) + "°C");
    $("#feels-temp").text("Feels like: " + parseInt(weatherData.main.feels_like) + "°C");
    $("#current-humidity").text("Humidity: " + weatherData.main.humidity + "%");
    $("#current-windspeed").text("Wind Speed: " + parseInt(weatherData.wind.speed * 3.6) + "km/h");
    $("#w-icon").attr("src", weatherIcon).css({"width" : "75px", "height" : "75px"});
    var note = $("#note");
    if (weatherData.main.temp < 0) {
        note = "It's freezing out there, don't forget to wear a coat!"
    } else if (weatherData.main.temp > 0 && weatherData.main.temp < 20) {
        note = "It's pretty chilly out there, don't forget your jacket!"
    } else if (weatherData.main.temp > 20 && weatherData.main.temp < 30) {
        note = "It's a beautiful weather out there, enjoy it!"
    } else if (weatherData.main.temp > 30) { 
        note = "It's pretty hot out there, don't forget a hat!"
    } else {
        note = "Don't forget to bring a towel! :)"
    }
    $("#note").text(note);
}

function getCoin() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json").then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                // console.log(data);
                var btcIcon = $("<i>").addClass("fa fa-btc");
                $("#coin").text("BTC/USD: " + data.bpi.USD.rate + " ").append(btcIcon);
                // console.log(data.bpi.USD.rate)     
                return;
            });
        } else {
            console.log("Coin Not Found...");
        }
    });
};

$(".currency1").change(function(){
    fetch("https://v6.exchangerate-api.com/v6/7a3af05f2e3e883feb64a5b0/latest/" + $(this).val())
    .then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
            selectedCurrency1 = data;
            return;
            });
        } else {
            console.log("Exchange Not Found...");
        }
    });
    passedCurrency2 = $(this).val();
})

$(".currency2").change(function(){
    var x = selectedCurrency1.conversion_rates;
    for (let key in x) {
        if (key === $(this).val()) {
            currency2Rate = x[key];
            passedCurrency = key;
            return;
        }
    }
});

$("#currency-amount1").change(function(){
    if (currency2Rate === currency1Rate) {
        $("#currency-amount2").val($(this).val());
    } else {
        var convert = $(this).val() * currency2Rate;
        $("#currency-amount2").val(convert.toFixed(2));
    }
});

$("#currency-amount2").change(function(){
    fetch("https://v6.exchangerate-api.com/v6/7a3af05f2e3e883feb64a5b0/latest/" + passedCurrency)
    .then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
            selectedCurrency2 = data;
            var y = selectedCurrency2.conversion_rates;
            for (let key in y) {
                if (key === passedCurrency2) {
                    currency1Rate = y[key];
                    return;
                }
            }});
        } else {
            console.log("Exchange Not Found...");
        }
    });
    if (currency1Rate === currency2Rate) {
        $("#currency-amount1").val($(this).val());
    } else {
        var convert = currency1Rate * $(this).val();
        $("#currency-amount1").val(convert.toFixed(2));
    }
    // console.log(currency1Rate);
    // console.log(currency2Rate);
});

// Carousel script for autoplay
// $(document).ready(function(){
//     $('.carousel').carousel({dist:0});
//     window.setInterval(function(){$('.carousel').carousel('next')},8000)
//  });

currentTime();
setInterval(currentTime, 1000);
startUp();
getCoin();
weatherButton.addEventListener("click", getWeather);