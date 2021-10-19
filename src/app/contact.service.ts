import { Injectable } from '@angular/core';
import {ContactPayload} from "./contact-payload";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _contacts_list : Array<ContactPayload> = [
    new ContactPayload(0, "Narasimha", "9876543210"),
    new ContactPayload(1, "Suraj", "8976543210"),
    new ContactPayload(2, "Ramesh", "9876543210"),
    new ContactPayload(3, "Suresh", "8976543210"),
    new ContactPayload(4, "Mukesh", "9876543210"),
    new ContactPayload(5, "Binod", "8976543210")
  ];

  constructor() { }


  get contacts_list(): Array<ContactPayload> {
    return this._contacts_list;
  }


  addNewContact(contact : ContactPayload) : boolean{

    if(contact.id == -1) {
      contact.id = this.contacts_list.length;
      this._contacts_list.push(contact);
    }
    else
      return this.updateContact(contact.id, contact);
    return true;

  }

  deleteContact(contact : ContactPayload) : Array<ContactPayload>{
    this._contacts_list = this._contacts_list.filter(item => item != contact);
    return this.contacts_list;
  }

  updateContact(id : number, updatedContact : ContactPayload) : boolean{

    let index = this._contacts_list.findIndex(item=> item.id == id);
    this._contacts_list[index] = updatedContact;

    return true;
  }

}
