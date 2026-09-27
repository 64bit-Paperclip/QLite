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

    // --- Array Behavior ---
    get length() {
        return this.elements.length;
    }

    [Symbol.iterator]() {
        return this.elements[Symbol.iterator]();
    }

    // --- Selection & Traversal ---
    find(selector) {
        const found = [];
        this.elements.forEach(el => {
            found.push(...el.querySelectorAll(selector));
        });
        return new QLiteCollection(found);
    }

    // --- DOM Manipulation & Insertion ---
    remove() {
        this.elements.forEach(el => el.remove());
        return this;
    }

    empty() {
        this.elements.forEach(el => {
            el.innerHTML = '';
        });
        return this;
    }

    // --- Events ---
    on(event, handler) {
        this.elements.forEach(el => el.addEventListener(event, handler));
        return this;
    }

    off(event, handler) {
        this.elements.forEach(el => el.removeEventListener(event, handler));
        return this;
    }

    // --- Classes ---
    addClass(className) {
        this.elements.forEach(el => el.classList.add(className));
        return this;
    }

    hasClass(className) {
        return this.elements[0]?.classList.contains(className) || false;
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

    // --- Data attributes ---
    data(name, value) {
        if (value === undefined) return this.elements[0]?.dataset[name];
        this.elements.forEach(el => el.dataset[name] = value);
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

    // --- Insertion ---
    append(content) {
        this.elements.forEach((el, index) => {
            if (typeof content === 'string') {
                el.insertAdjacentHTML('beforeend', content);
            } else if (content instanceof Element) {
                // If appending to multiple elements, clone after the first one
                el.appendChild(index === 0 ? content : content.cloneNode(true));
            } else if (content instanceof QLiteCollection) {
                content.elements.forEach(child => {
                    el.appendChild(index === 0 ? child : child.cloneNode(true));
                });
            }
        });
        return this;
    }

    prepend(content) {
        this.elements.forEach((el, index) => {
            if (typeof content === 'string') {
                el.insertAdjacentHTML('afterbegin', content);
            } else if (content instanceof Element) {
                el.prepend(index === 0 ? content : content.cloneNode(true));
            } else if (content instanceof QLiteCollection) {
                content.elements.forEach(child => {
                    el.prepend(index === 0 ? child : child.cloneNode(true));
                });
            }
        });
        return this;
    }

    before(content) {
        this.elements.forEach((el, index) => {
            if (typeof content === 'string') {
                el.insertAdjacentHTML('beforebegin', content);
            } else if (content instanceof Element) {
                el.before(index === 0 ? content : content.cloneNode(true));
            } else if (content instanceof QLiteCollection) {
                content.elements.forEach(child => {
                    el.before(index === 0 ? child : child.cloneNode(true));
                });
            }
        });
        return this;
    }

    after(content) {
        this.elements.forEach((el, index) => {
            if (typeof content === 'string') {
                el.insertAdjacentHTML('afterend', content);
            } else if (content instanceof Element) {
                el.after(index === 0 ? content : content.cloneNode(true));
            } else if (content instanceof QLiteCollection) {
                content.elements.forEach(child => {
                    el.after(index === 0 ? child : child.cloneNode(true));
                });
            }
        });
        return this;
    }

    parent() {
        const parents = [];
        this.elements.forEach(el => {
            if (el.parentElement) {
                parents.push(el.parentElement);
            }
        });
        // Remove duplicates using a Set
        return new QLiteCollection([...new Set(parents)]);
    }

    children(selector) {
        const childElements = [];
        this.elements.forEach(el => {
            const kids = Array.from(el.children);
            if (selector) {
                // Filter children if a selector is provided (e.g., children('.active'))
                childElements.push(...kids.filter(child => child.matches(selector)));
            } else {
                childElements.push(...kids);
            }
        });
        return new QLiteCollection([...new Set(childElements)]);
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