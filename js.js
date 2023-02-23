filterSelection("Nyheder")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "Nyheder") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 82ecaab331c6536601b30dd9f7bb18223a56c94f

//Edvin ballade


//Aner ikke hvad fanden jeg laver
<<<<<<< HEAD
=======
// Get the dropdown menu link and dropdown menu content
	var dropdownLink = document.querySelector(".dropdown > a");
	var dropdownContent = document.querySelector(".dropdown-content");

	// Add event listeners to show and hide the dropdown menu
	dropdownLink.addEventListener("mouseover", function() {
		dropdownContent.style.display = "block";
	});

	dropdownLink.addEventListener("mouseout", function() {
=======
>>>>>>> 6f448c965e5c64a68a1a2b51fe723c9e04074fba
>>>>>>> 82ecaab331c6536601b30dd9f7bb18223a56c94f
