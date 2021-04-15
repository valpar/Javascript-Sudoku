var divNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  number = [...divNumber];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Täidab kastid suvaliste numbritega
function fill() {
  number = shuffle(number);
  number.map((num, i) => {
    const a = document.getElementsByClassName(divNumber[i]);
    for (var r = 0; r < a.length; r++) {
      a[r].innerHTML = num;
    }
  });
}
fill();

// Hide some numbers randomly
function hide() {
  var origine = "",
    p = document.getElementsByTagName("p");

  for (var j = 0; j < p.length; j++) {
    const num = Math.floor(Math.random() * Math.floor(2));
    if (num !== 0) {
      p[j].style.display = "none";
      origine = p[j].innerHTML;
      var x1 = document.createElement("INPUT");
      x1.setAttribute("type", "text");
      x1.setAttribute("maxlength", 1);
      x1.setAttribute("onkeypress", "validate(event)");

      onkeypress = "validate(event)";
      x1.classList.add(origine);
      p[j].parentNode.insertBefore(x1, p[j]);
    }
  }
}
hide();

// Kontrollib kas tegemist on numbri või tähe sümboliga
function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

// Check the input value
const allInput = document.querySelectorAll("INPUT");

allInput.forEach((e, i) => {
  e.oninput = (event) => {
    if (event.target.value === e.className) {
      e.style.color = "forestgreen";
    } else {
      e.style.color = "firebrick";
    }

    const result = check();
    if (result) {
      document.getElementById("title").innerHTML = "Bravo !";
    }
  };
});

function check() {
  var inputArray = Array.prototype.slice.call(allInput);
  const checkAll = inputArray.filter((item) => {
    return item.style.color === "forestgreen";
  });
  if (checkAll.length === inputArray.length) {
    return true;
  } else {
    return false;
  }
}

// restardib mängu
document.getElementById("restart").addEventListener("click", () => {
  // location.reload();
  history.go(0);
});
