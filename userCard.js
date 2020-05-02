const template = document.createElement('template');
template.innerHTML = `<style>
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

            .user-div button {
                border: 0;
                cursor: pointer;
                background: darkorchid;
                color: #FFF;
                border-radius: 5px;
                padding: 5px 10px;
            }

            .hide {
                display: none;
            }
        </style> 

        <div class="user-div">
            <img></img>
            <div>
                <h3></h3>
                <div class="info">
                    <p><slot/></p>
                    <p><slot name="email"/></p>
                    <p><slot name="phone"/></p>
                </div>
                <button id="toggle-info">Hide Info</button>
            </div>
        </div>`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        // Shadow DOM
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Fill data in template
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    // Button click listener
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener('click');
    }

    toggleInfo() {
        console.log(12345);
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleInfoButton = this.shadowRoot.querySelector('#toggle-info');

        if (this.showInfo) {
            info.style.display = 'block';
            toggleInfoButton.innerText = 'Hide Info'; 
        } else {
            info.style.display = 'none';
            toggleInfoButton.innerText = 'Show Info';
        }
    }
}

window.customElements.define('user-card', UserCard);
