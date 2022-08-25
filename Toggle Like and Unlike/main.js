let img = document.getElementById("puppyImage");
let icon = document.getElementById("likeIcon");
let like = document.getElementById("likeButton");

let liked = false;

function onClickLikeButton() {

    if (liked === false) {

        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";

        icon.style.color = "#0967d2";

        like.style.backgroundColor = "#0967d2";

        like.style.color = "#cbd2d9";

        liked = true;

    } else {

        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";

        icon.style.color = "#cbd2d9";

        like.style.backgroundColor = "#cbd2d9";

        like.style.color = "#9aa5b1";

        liked = false;

    }
}