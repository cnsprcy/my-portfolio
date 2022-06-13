/* eslint-env es6 */
/* eslint-disable no-console */

/* navigation menu open/close */

const menu = document.getElementById("alt-burger");
const topBar = document.getElementById("bar-1");
const bottomBar = document.getElementById("bar-2");
const list = document.getElementById("menu-list");

menu.addEventListener("click", openMenu);

function openMenu() {
	if (list.style.display === "block") {
		menu.style.transform = "translateX(0px)";
		topBar.style.transform = "rotate(0deg)";
		topBar.style.transform += "translateY(0px)";
		bottomBar.style.transform = "rotate(0deg)";
		bottomBar.style.transform += "translateY(0px)";
		list.style.display = "none";
	} else {
		menu.style.transform = "translateX(13px)";
		topBar.style.transform = "rotate(45deg)";
		topBar.style.transform += "translateY(17px)";
		bottomBar.style.transform = "rotate(-45deg)";
		bottomBar.style.transform += "translateY(-17px)";
		list.style.display = "block";
	}
}

/* close menu on outside click */

window.addEventListener('mouseup', function() {
  if (event.target != menu) {
    list.style.display = "none";
		menu.style.transform = "translateX(0px)";
		topBar.style.transform = "rotate(0deg)";
		topBar.style.transform += "translateY(0px)";
		bottomBar.style.transform = "rotate(0deg)";
		bottomBar.style.transform += "translateY(0px)";
    }
});

/* automatically update copywright yearcause ain't nobody got time for that */

const year = document.getElementById("current-year");

year.innerText = new Date().getFullYear();