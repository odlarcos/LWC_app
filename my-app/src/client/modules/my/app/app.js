import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track webtechnologieId;
    @track state;

    constructor() {
        super();
        this.state = 'list';
        window.history.replaceState('list', null, '');
        window.onpopstate = event => {
            if (event.state) {
                this.state = event.state;
            }
        };
    }

    get isStateList() {
        return this.state === 'list';
    }
    get isStateDetails() {
        return this.state === 'details';
    }

    handleNavigate(event) {
        this.webtechnologieId = event.detail;
        this.state = 'details';
        window.history.pushState('details', null);
    }
}