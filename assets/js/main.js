window.onscroll = function ()
{
    var toTopButton = document.getElementById("backToTopButton");

    var contentHeight = document.documentElement.scrollHeight;
    var scrollPoint = window.scrollY;
    var screenHeight = window.innerHeight;
    var totalViewHeight = scrollPoint + screenHeight;
    var CurrentViewHeightPercentage = totalViewHeight / contentHeight;

    // if the user has scrolled past 70% of the page, display the back-to-top button
    // this is done by adding the class isVisible which is made visible/invisible in sytles.css.
    if( CurrentViewHeightPercentage > 0.7)
        toTopButton.classList.add("isVisible");
    else
        toTopButton.classList.remove("isVisible");
}

function filter()
{

    var categoryChosen = document.getElementById("categoryFilter").value.toLowerCase();
    var locationChosen = document.getElementById("locationFilter").value.toLowerCase();
    var dateChosen     = document.getElementById("dateFilter").value.toLowerCase();
    var searchBarContents = document.getElementById("searchBar").value.toLowerCase();
    var titles = $('.card h5')
    var cards = $('.eventContainer')
    var info = $('.card p:even')
    cards.hide()

    // split the search string into words and put them in an array
    var searchTerms = searchBarContents.split(" ");

    // loop over every word
    for (var i = 0; i < searchTerms.length; i++)
    {
        var currentTerm = searchTerms[i].trim(); // current word to match. We also trimmed extra spaces if any

        // search all card titles for this word
        for (var j = 0; j < titles.length; j++)
        {
            var currentCard = cards.eq(j);
            var cardInfoText = currentCard.find('p').eq(0).text().toLowerCase();

            if (categoryChosen !== 'all' && !currentCard.hasClass(categoryChosen))
                continue; // category doesn't match so we skip showing this card
            if (locationChosen !== 'all' && cardInfoText.indexOf(locationChosen) === -1)
                continue;
            if (dateChosen !== 'all' && cardInfoText.indexOf(dateChosen) === -1)
                continue;

            // Does the title contain the current term? If yes show the card
            var titleText = titles.eq(j).text().toLowerCase();
            if (titleText.indexOf(currentTerm) !== -1) {
                currentCard.show();
            }
        }
    }
}
