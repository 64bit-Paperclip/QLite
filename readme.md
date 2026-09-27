# QLite

A lightweight, modern drop-in replacement for jQuery's common selector and DOM manipulation features. 

QLite gives you the iconic $ syntax, method chaining, and everyday utility functions using native modern browser APIs, without the thousands of lines of legacy bloat.

## Important Conflict Warning

This library hijacks the global $ identifier. It is not compatible with running standard jQuery at the same time in the same global scope. It is specifically designed as a standalone, zero-bloat drop-in replacement for common jQuery features using modern vanilla JavaScript.

## Installation

Simply include the qlite.js file in your project before your main scripts:

```html
<script src="qlite.js"></script>
```

## Features Included

* Selection and Traversal: $(selector), .find(selector)
* Events: .on(event, handler)
* Classes: .addClass(), .removeClass(), .toggleClass()
* Attributes and Values: .attr(), .val()
* Styles and Content: .css(), .html(), .text()
* Iteration: .each(), $.ready()

## Usage Examples

```javascript
// Select and add a class / change CSS
$('.my-button').addClass('active').css('background-color', 'blue');

// Event listener
$('.my-button').on('click', (e) => {
    console.log('Clicked!');
});

// Get or set input values
const username = $('#username').val();
$('#username').val('New Value');

// DOM Ready
$.ready(() => {
    console.log('DOM is fully loaded!');
});
```