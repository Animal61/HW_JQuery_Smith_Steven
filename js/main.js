// Set JQuery empty ready function
$(document).ready(function () {
    console.log('This document is ready.');
});

// Set p tags to variable paragraphs
$.paragraphs = $('p');

// Set 8th (object #7) paragraph background-color and padding
$.paragraphs.slice(7, 8).css({'background-color': 'yellow', 'padding': '40px'});

// Set 46th (object #45) paragraph background-color, color and padding
$.paragraphs.slice(45, 46).css({'background-color': 'red', 'color': 'white', 'padding': '40px'});

// Set even paragraphs text direction from right to left, font-weight, background-color and color
$.paragraphs.filter(':even').css({'direction': 'rtl', 'unicode-bidi': 'bidi-override', 'font-weight': 'bold', 'color': 'orange', 'background-color': 'blue', 'padding': '10px 20px'});
