// Javascript Introduction
/*
    Javascript can change HTML content:

    one of many Javascript HTML methods is [getElementById()].
    The example below "finds" an HTML element (with id="demo"), and changes
    the element content (innerHTML) to "Hello Javascript":
*/

// Example:

function changeHTMLContent() {
  document.getElementById("demo").innerHTML = "Hello Javascript";
}

/*
    Javascript can change HTML Attribute values:
    In this example Javascript changes the value of src (source) attribute
    of an <img> tag:
*/

// The Light Bulb example:

function turnOnTheLight() {
  document.getElementById("myImage").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
}

function turnOffTheLight() {
  document.getElementById("myImage").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
}

/*
    Javascript can change HTML styles (CSS):

    Changing the style of an HTML element, is a variant of changing an HTML
    attribute:
*/

// Example:

function makeFontBigger() {
  document.getElementById("text").style.fontSize = "35px";
}

/*
    Javascript can hide HTML elements:

    Hiding HTML elements can be done by changing html style:
*/

// Example:

function hidingHTMLElement() {
  document.getElementById("hide").style.display = "none";
}


/*
    Javascript can show HTML elements:

    Showing hidden HTML elements can be also done by changing the display
    style:
*/

// Example:

function showHiddenElement() {
    document.getElementById("show").style.display = "block";
}
