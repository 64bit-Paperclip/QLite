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

### Manipulation & Insertion
* **`append(content)`** - Inserts content at the end of each selected element.
* **`prepend(content)`** - Inserts content at the beginning of each selected element.
* **`before(content)`** - Inserts content before each selected element.
* **`after(content)`** - Inserts content after each selected element.
* **`remove()`** - Removes selected elements from the DOM.
* **`empty()`** - Clears all child nodes and inner HTML inside selected elements.
* **`html(content)`** - Gets or sets the inner HTML.
* **`text(content)`** - Gets or sets the text content.
* **`val(content)`** - Gets or sets the value of input elements.

### Classes & Attributes
* **`addClass(className)`** - Adds a class to selected elements.
* **`removeClass(className)`** - Removes a class from selected elements.
* **`toggleClass(className)`** - Toggles a class on selected elements.
* **`hasClass(className)`** - Returns `true` if the first element has the class.
* **`attr(name, value)`** - Gets or sets an attribute.
* **`data(name, value)`** - Gets or sets a `data-*` dataset attribute.
* **`css(property, value)`** - Applies an inline style to selected elements.

### Events
* **`on(event, handler)`** - Attaches an event listener.
* **`off(event, handler)`** - Removes an event listener.

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

MIT