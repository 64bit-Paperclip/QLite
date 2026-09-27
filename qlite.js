class QLiteCollection {
    constructor(selector) {
        if (typeof selector === 'string') {
            this.elements = Array.from(document.querySelectorAll(selector));
        } else if (selector instanceof Element) {
            this.elements = [selector];
        } else {
            this.elements = selector || [];
        }
    }

    // --- Selection & Traversal ---
    find(selector) {
        const found = [];
        this.elements.forEach(el => {
            found.push(...el.querySelectorAll(selector));
        });
        return new QLiteCollection(found);
    }

    // --- Events ---
    on(event, handler) {
        this.elements.forEach(el => el.addEventListener(event, handler));
        return this;
    }

    // --- Classes ---
    addClass(className) {
        this.elements.forEach(el => el.classList.add(className));
        return this;
    }

    removeClass(className) {
        this.elements.forEach(el => el.classList.remove(className));
        return this;
    }

    toggleClass(className) {
        this.elements.forEach(el => el.classList.toggle(className));
        return this;
    }

    // --- Attributes & Values ---
    attr(name, value) {
        if (value === undefined) return this.elements[0]?.getAttribute(name);
        this.elements.forEach(el => el.setAttribute(name, value));
        return this;
    }

    val(content) {
        if (content === undefined) return this.elements[0]?.value;
        this.elements.forEach(el => el.value = content);
        return this;
    }

    // --- Styles & Content ---
    css(property, value) {
        this.elements.forEach(el => el.style[property] = value);
        return this;
    }

    html(content) {
        if (content === undefined) return this.elements[0]?.innerHTML;
        this.elements.forEach(el => el.innerHTML = content);
        return this;
    }

    text(content) {
        if (content === undefined) return this.elements[0]?.textContent;
        this.elements.forEach(el => el.textContent = content);
        return this;
    }

    // --- Iteration ---
    each(callback) {
        this.elements.forEach((el, index) => callback.call(el, index, el));
        return this;
    }
}

// The main $ shortcut function
const $ = (selector) => new QLiteCollection(selector);

$.ready = (callback) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
};