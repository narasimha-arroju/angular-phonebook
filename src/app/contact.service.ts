import { Injectable } from '@angular/core';
import {ContactPayload} from "./home/contact-payload";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _conctacts_list : Array<ContactPayload> = [
    new ContactPayload("abc", 9876543210),
    new ContactPayload("xyz", 8976543210)
  ];

  constructor() { }


  get conctacts_list(): Array<ContactPayload> {
    return this._conctacts_list;
  }
}
