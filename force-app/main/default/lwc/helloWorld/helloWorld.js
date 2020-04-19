// wireGetRecordDynamicContact.js
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Contact.Name',
    'Contact.Phone',
    'Contact.HomePhone',
    'Contact.MobilePhone',
    'Contact.OtherPhone',
    'Contact.Fax'
];

export default class WireGetRecordDynamicContact extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '0036g00000AEiJdAAL', fields: FIELDS })
    contact;

    get name() {
        return this.contact.data.fields.Name.value;
    }

    get phone() {
        return this.contact.data.fields.Phone.value;
    }
    get homephone() {
        return this.contact.data.fields.HomePhone.value;
    }
    get mobilephone() {
        return this.contact.data.fields.MobilePhone.value;
    }
    get otherphone() {
        return this.contact.data.fields.OtherPhone.value;
    }
    get fax() {
        return this.contact.data.fields.Fax.value;
    }

}
    