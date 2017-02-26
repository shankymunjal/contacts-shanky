import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from '../contact.service'

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts()
  }

}
