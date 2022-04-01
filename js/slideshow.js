var changeImg = true

function changeImgFunc(imgShowing) {
    if (imgShowing == 1) {
        document.getElementById("img1").style.visibility = "visable";
        document.getElementById("img2").style.visibility = "hidden";
        document.getElementById("img3").style.visibility = "hidden";
    }
    if (imgShowing == 2) {
        document.getElementById("img1").style.visibility = "hidden";
        document.getElementById("img2").style.visibility = "visable";
        document.getElementById("img3").style.visibility = "hidden";
    }
    if (imgShowing == 3) {
        document.getElementById("img1").style.visibility = "hidden";
        document.getElementById("img2").style.visibility = "hidden";
        document.getElementById("img3").style.visibility = "visable";
    }
}

// while (changeImg == true) {
//     changeImgFunc(1)

// }