
var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'sources=fox-news&' +
          'apiKey=1b5b156f36164922908fb04b4a91da79';
var articles;

// function for ajax call to news aggregator API to get an object array of Fox News top headlines.

function getHeadlines() {
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            articles = response.articles;
        console.log(articles); 
            for (var i = 0; i < articles.length; i++) {
                var newList = $("<ul>");
                var headlines = $("<li>");
                headlines.append(`<a href="${articles[i].url}" target="_blank"> ${articles[i].title} </a>
                <p>${moment.utc(articles[i].publishedAt).format('MMMM DD, HH:mm a')}</p>`);
                newList.append(headlines);    
                $(".headlines").append(newList); 
        }
    });
}


getHeadlines();