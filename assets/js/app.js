
// Initialize Firebase

var config = {
    apiKey: "AIzaSyB_zXnNbvnEYRsYGSpumtV-jiADhtmvhtM",
    authDomain: "utcodingbootcampproject1.firebaseapp.com",
    databaseURL: "https://utcodingbootcampproject1.firebaseio.com",
    projectId: "utcodingbootcampproject1",
    storageBucket: "utcodingbootcampproject1.appspot.com",
    messagingSenderId: "316462943623"
};
firebase.initializeApp(config);





// news apikey and query url set up
var queryURL = 'https://newsapi.org/v2/top-headlines?' +
          'sources=fox-news&' +
          'apiKey=1b5b156f36164922908fb04b4a91da79';
var articles;

// function for ajax call to get top 10 headlines and put them in a list and append to div.
// requires jquery and momentjs to run

function getHeadlines() {
    $.ajax({
        url: queryURL,
        method: "GET",
        success: function(response) {
            articles = response.articles;
            console.log(articles); 
            var newList = $("<ul>");
            for (var i = 0; i < articles.length; i++) {
                    
                    var headlines = $("<li>");
                    headlines.append(`<a href="${articles[i].url}" target="_blank">${articles[i].title} </a>
                    <p>Posted: ${moment.utc(articles[i].publishedAt).subtract(6, "hours").format('LLLL')}</p>`);
                    newList.append(headlines);    

                //this is where we would input the div to put the headlines ".headlines"
                    $(".headlines").append(newList); 
            } 
        },

        //error handling message
        error: function(status, code, message) {
            $(".headlines").append(`There was an ${code} - ${message}`);
        },
    
    });
} 

//function to call for the headlines to appear
getHeadlines();
