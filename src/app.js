/* eslint-disable */
import "bootstrap";
import "./style.css";

let simbols = ["♦", "♥", "♠", "♣"];
let numeros = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  // generar selección aleatoria
  let randomitem = simbols[Math.floor(Math.random() * simbols.length)];

  // generar simbolos
  let superior = document.getElementById("superior");
  superior.innerHTML = randomitem;

  let inferior = document.getElementById("inferior");
  inferior.innerHTML = randomitem;

  // generar numero o letra

  let randomletra = numeros[Math.floor(Math.random() * numeros.length)];
  let letra = document.getElementById("numero");
  letra.innerHTML = randomletra;

  // generar coloración
  if (randomitem == "♦" || randomitem == "♥") {
    inferior.style.color = "red";
    superior.style.color = "red";
  } else {
    inferior.style.color = "black";
    superior.style.color = "black";
  }
};

// generar con boton
let boton = document.getElementById("generar");
boton.addEventListener("click", onload);

// cambiar el tamañano de la carta

const carta = document.getElementById("carta");
let height = document.getElementById("inputheight");
const width = document.getElementById("inputwidth");

height.addEventListener("input", e => {
  carta.style.minHeight = `${e.target.value}px`;
});

width.addEventListener("input", e => {
  carta.style.minWidth = `${e.target.value}px`;
});

// regresar al valor predeterminado

let regresar = document.getElementById("regresar");
regresar.addEventListener("click", regre);

function regre() {
  carta.style.minHeight = 600 + "px";
  carta.style.minWidth = 350 + "px";
  height.value = 600;
  width.value = 350;
}

// cada X tiempo

let tiempo = document.getElementById("tiempo");
tiempo.addEventListener("click", intervalo);

function intervalo() {
  setInterval(onload, 2000);
}

// Initialise slider settings
var mySlider = $("#my-slider").slider({
  min: 350,
  max: 1000,
  step: 50,
  value: 350
});

// Initialise slider
$("#my-slider").on("slide", function(slideEvt) {
  $("#inputSliderVal").val(slideEvt.value);
});

// Allow input text to change slider on Blur or Enter
var minSliderValue = $("#my-slider").data("slider-min");
var maxSliderValue = $("#my-slider").data("slider-max");

// Blur input
$("#inputSliderVal").on("blur", function() {
  var val = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = val > maxSliderValue ? maxSliderValue : val;
  $("#my-slider").slider("setValue", val);
});

// Enter clicked
$("#inputSliderVal").keyup(function(e) {
  if (e.which == 13)
    // Enter key
    $(this).blur();
});

// Use buttons to increase/decrease
// Increase
$(".sliderButton.plus").click(function() {
  var val = mySlider.slider("getValue");
  var step = mySlider.slider("getAttribute").step;
  $("#inputSliderVal").val(val + step);
  mySlider.slider("setValue", val + step);
});

// Decrease
$(".sliderButton.minus").click(function() {
  var val = mySlider.slider("getValue");
  var step = mySlider.slider("getAttribute").step;
  $("#inputSliderVal").val(val - step);
  mySlider.slider("setValue", val - step);
});
