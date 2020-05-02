const shadowedTemplate = document.createElement('template');
shadowedTemplate.innerHTML = `<style>
        h3 {
            color: green;
        }

        .user-div {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            width: 500px;
            border: 1px solid black;
            margin-bottom: 15px;
            padding: 10px;
        }

        .user-div img {
            width: 100%;
        }
        </style> 

        <div class="user-div">
            <img></img>
            <h3></h3>
        </div>`;

class ShadowedUserCard extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(shadowedTemplate.content.cloneNode(true));

        // Fill data in template
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }
}

window.customElements.define('shadowed-user-card', ShadowedUserCard);
