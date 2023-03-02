
// Filteringssektion burger - Sarah
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

// Show filtered elements

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1)
    {element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected

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
    current[0].className = current[0].className.replace(" active",
    "");
    this.className += " active";
  });
}

//Nadia sunset logo

function bigImg(x) {
  x.style.height = "120px";
  x.style.width = "120px";
  x.style.transition = "all 1s";
}

function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

function myFunction() {
  var txt;
  if (confirm("Hver dag. Sunset Boulevard – Det føles bare bedre!")) {
  }
  document.getElementById("demo").innerHTML = txt;
}

//Edvins JS stress
