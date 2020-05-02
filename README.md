# Web Components

Helps you divide your HTML pages into components and reuse them without using any third-party framework.

### Custom Elements

We can create our own HTML elements (tags) from scratch or by extending an existing HTML element.

Custom elements like native HTML elements have lifecycle methods which can be overridden.

**Lifecycle Methds**:

**1. constructor()**: Called when an instance of element is created.

**2. connectedCallback()**: Called every time when the element is inserted into the DOM.

**3. disconnectedCallback()**: Called every time when the element is removed from the DOM.

**4. attributeChangedCallback(attributeName, oldValue, newValue)**: Called when an attribute is added, removed or updated.

### Shadow DOM

It encapsulates styles and markup. Without using Shadow DOM, any style within the custom element will be applied to the entire document.

### HTML Templates

Defines the encapsulated markup of our web component. It can be reused by multiple shadow DOMs/web components.
