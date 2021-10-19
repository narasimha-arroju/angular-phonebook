import {Component, Inject, OnInit} from '@angular/core';
import {ContactPayload} from "../contact-payload";
import {ContactService} from "../contact.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent{

  _edit_contact : ContactPayload;


  constructor(private contactService : ContactService,
              public dialogRef: MatDialogRef<ContactEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this._edit_contact = new ContactPayload(this.data.id, this.data.full_name, this.data.mobile_number);

  }



  save() : boolean{

    console.log(this._edit_contact);
    this.dialogRef.close();
    if(this._edit_contact.full_name != "")
      return this.contactService.addNewContact(this._edit_contact);
    return false;

  }

  set edit_contact(value: ContactPayload) {
    this._edit_contact = value;

  }

}
