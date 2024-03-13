var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var gradientType = document.querySelector(".gradient-type");
var b = document.querySelector("body");
var h3 = document.querySelector("h3");

function bckgnd() {
    var selectedGradientType = gradientType.value;
    b.style.background = "linear-gradient(" + selectedGradientType + "," + c1.value + "," + c2.value + ")";
    h3.textContent = b.style.background + ";";
}

c1.addEventListener("input", bckgnd);
c2.addEventListener("input", bckgnd);
gradientType.addEventListener("change", bckgnd);
