function ReadMoreLess() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var iMoreLess = document.getElementById("iMoreLess");
            var lblText = document.getElementById("lblText");
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                iMoreLess.style.display= "block";
                lblText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                iMoreLess.style.display= "none";
                lblText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
}