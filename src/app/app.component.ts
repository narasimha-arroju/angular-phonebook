import { Component } from '@angular/core';
import {ContactPayload} from "./contact-payload";
import {ContactService} from "./contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ContactEditorComponent} from "./contact-editor/contact-editor.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniProject';
  allContacts : Array<ContactPayload>;
  displayContacts : Array<ContactPayload>;
  private _searchString: string = "";
  isAsc: boolean = true;

  get searchString(): string {
    return this._searchString;
  }

  set searchString(value: string) {
    this._searchString = value;
    this.performSearch();
  }

  constructor(private contactService : ContactService,
              private router: Router,
              private matDialog: MatDialog,
              private route: ActivatedRoute) {

    this.allContacts = this.contactService.contacts_list;
    this.sortAsc();
    this.displayContacts = this.allContacts;

  }

  newContact(): void{
    let contact = new ContactPayload(-1,"","");
    const dialogRef = this.matDialog.open(ContactEditorComponent,
      {width :' 400px', data: contact});
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], {relativeTo: this.route});
      this.allContacts = this.contactService.contacts_list;
      this.sortAsc();
      this.displayContacts = this.allContacts;
    })
  }


  editContact(contact: ContactPayload) {
    const dialogRef = this.matDialog.open(ContactEditorComponent,{width: '400px', data:contact});

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], {relativeTo: this.route});
      this.allContacts = this.contactService.contacts_list;
      this.sortAsc();
      this.displayContacts = this.allContacts;
    })
  }

  deleteContact(contact: ContactPayload) {
     this.allContacts = this.contactService.deleteContact(contact);
     this.sortAsc();
     this.displayContacts = this.allContacts;
  }

  performSearch() {
    if(this.searchString != "")
      this.displayContacts = this.allContacts.filter(item =>
        item.full_name.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    else
      this.displayContacts = this.allContacts;
  }

  toggleSort() {
    this.sortAsc();
    if(this.isAsc){
      console.log("In true block");
      this.displayContacts = this.allContacts.reverse();
      this.isAsc = false;
    }
    else {
      console.log("In false block");
      this.displayContacts = this.allContacts;
      this.isAsc = true;
    }
    console.log(this.isAsc)
  }

  sortAsc(){
    this.allContacts = this.allContacts.sort(
      (a, b) => a.full_name > b.full_name ? 1 : a.full_name < b.full_name ? -1 : 0);
  }
}
