window.onscroll = function ()
{
    var toTopButton = document.getElementById("backToTopButton");
    var contentHeight = document.documentElement.scrollHeight;
    var scrollPoint = window.scrollY;
    var screenHeight = window.innerHeight;
    var totalViewHeight = scrollPoint + screenHeight;
    var CurrentViewHeightPercentage = totalViewHeight / contentHeight;
    if( CurrentViewHeightPercentage > 0.5)
        toTopButton.classList.add("isVisible");
    else
        toTopButton.classList.remove("isVisible");
}
