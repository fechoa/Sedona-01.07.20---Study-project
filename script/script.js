var searchButton = document.querySelector(".link-search");
var searchForm = document.querySelector(".hide-form");
var navList = document.querySelector(".item-menu");

searchButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.toggle("form-js");
	searchForm.classList.toggle("hide-form");
});

navList.addEventListener("click", function () {
	classList.add("item-selected");
});

var linkItem = document.querySelector(".link-menu");
var textItem = document.querySelector(".sort-item");

linkItem.addEventListener("click", function () {
	textItem.classList.remove("active-item");
});

