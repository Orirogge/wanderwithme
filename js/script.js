
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("top_button").style.display = "block";
    } else {
        document.getElementById("top_button").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}