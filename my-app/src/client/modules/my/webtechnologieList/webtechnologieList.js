import { LightningElement, track } from 'lwc';
import { getWebtechnologies } from 'data/service';
export default class webtechnologiesList extends LightningElement {
    @track webtechnologies = [];
    connectedCallback() {
        getWebtechnologies().then(result => {
            this.webtechnologies = result;
        });
    }
    handleWebtechnologieClick(event) {
        const index = event.currentTarget.dataset.index;
        const navigateEvent = new CustomEvent('navigate', {
            detail: this.webtechnologies[index].id
        });
        this.dispatchEvent(navigateEvent);
    }
}
