import { LightningElement, api, track } from 'lwc';
import { getWebtechnologie } from 'data/service';
export default class webtechnologieDetails extends LightningElement {
    @track webtechnologie;
    @api
    set webtechnologieId(id) {
        this._webtechnologie = id;
        this.webtechnologie = getWebtechnologie(id);
    }
    get webtechnologieId() {
        return this._webtechnologieId;
    }
}
