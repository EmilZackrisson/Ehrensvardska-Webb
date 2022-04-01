function openNav() {
  document.getElementById("mySidenav").style.width = "300px";

  document.body.style.marginLeft = "300px";
  // document.getElementById("hamburger").style.transform = "rotate(90deg)";
  document.getElementById("hamburger").style.visibility = "hidden";

  navigator.vibrate(70); // vibrate for 70ms
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginLeft = "0px";
  // document.getElementById("hamburger").style.transform = "rotate(0deg)";
  document.getElementById("hamburger").style.visibility = "visible";

  navigator.vibrate(70); // vibrate for 70ms
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var open = false;

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  // document.getElementsByClassName("dropdown-content").classList.toggle("show");
  console.log("ARROW CLICK");
  navigator.vibrate(70); // vibrate for 70ms

  if (open) {
    document.getElementById("dropdown-arrow").style.transform = "rotate(0deg)";
    open = false;
    console.log("CLOSED");
  }
  else {
    document.getElementById("dropdown-arrow").style.transform = "rotate(180deg)";
    open = true;
    console.log("OPENED");
  }
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        var open = false;
      }
    }

  }
}