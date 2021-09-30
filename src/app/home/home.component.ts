import { Component, OnInit } from '@angular/core';
import {ContactPayload} from "./contact-payload";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : Array<ContactPayload> | undefined ;

  constructor(private contactService : ContactService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactService.conctacts_list;
  }

}
