# QLiteCollection ($)

A lightweight, high-performance, jQuery-inspired DOM manipulation and traversal library written in modern JavaScript. 

`QLiteCollection` gives you the familiar, chainable syntax of jQuery (`$`) using modern native browser APIs, keeping your footprint tiny without sacrificing the utility methods you use every day.

---

## Features

* **Familiar Syntax:** Use the classic `$(selector)` shorthand and chain methods effortlessly.
* **Modern Array Behavior:** Iterate over collections using native loops, spread syntax, or check `.length`.
* **Robust DOM Insertion:** Easily `append`, `prepend`, `before`, or `after` strings, native elements, or other collections.
* **Clean Traversal:** Navigate up, down, and across the DOM tree with `.find()`, `.parent()`, and `.children()`.
* **Zero Dependencies:** Pure vanilla JavaScript.

---

## Installation

Simply drop the script into your project or include it via a script tag:

    <script src="qlite.js"></script>

---

## Quick Start

    // Wait for DOM to be ready
    $.ready(() => {
        // Select elements and chain methods
        $('.item')
            .addClass('active')
            .css('color', 'blue')
            .text('Updated Text!');
    });

---

## API Reference

### Selection & Creation
* **`$(selector)`** - Selects elements via CSS selector string, native `Element`, or an array/collection.

### Getters
* **`html()`** - Gets the inner HTML of the first element in the collection.
* **`text()`** - Gets the text content of the first element in the collection.
* **`val()`** - Gets the value of the first input element in the collection.
* **`attr(name)`** - Gets an attribute value from the first element in the collection.
* **`data(name)`** - Gets a `data-*` dataset attribute from the first element in the collection.
* **`hasClass(className)`** - Returns `true` if the first element has the specified class.

### Setters & Manipulation
* **`html(content)`** - Sets the inner HTML for all selected elements.
* **`text(content)`** - Sets the text content for all selected elements.
* **`val(content)`** - Sets the value for all selected elements.
* **`attr(name, value)`** - Sets an attribute value for all selected elements.
* **`data(name, value)`** - Sets a `data-*` dataset attribute for all selected elements.
* **`append(content)`** - Inserts content at the end of each selected element.
* **`prepend(content)`** - Inserts content at the beginning of each selected element.
* **`before(content)`** - Inserts content before each selected element.
* **`after(content)`** - Inserts content after each selected element.
* **`remove()`** - Removes selected elements from the DOM.
* **`empty()`** - Clears all child nodes and inner HTML inside selected elements.
* **`css(property, value)`** - Applies an inline style to selected elements.

### Classes
* **`addClass(className)`** - Adds a class to selected elements.
* **`removeClass(className)`** - Removes a class from selected elements.
* **`toggleClass(className)`** - Toggles a class on selected elements.

### Events
* **`on(event, handler)`** - Attaches an event listener to selected elements.
* **`off(event, handler)`** - Removes an event listener from selected elements.

### Traversal
* **`find(selector)`** - Finds descendant elements matching the selector.
* **`parent()`** - Gets the unique parent elements.
* **`children(selector)`** - Gets direct child elements (optionally filtered by selector).

### Iteration & Utilities
* **`each(callback)`** - Iterates over elements (with callback context bound to the element).
* **`length`** - Property returning the number of elements in the collection.
* **`$.ready(callback)`** - Executes callback when the DOM is fully loaded.

---

## License
