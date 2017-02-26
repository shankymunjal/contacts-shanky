import { Injectable } from '@angular/core';
import {Contact} from './contact';

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    {name: "Shanky", lastName:"Munjal", id: 1},
    {name: "Antonio", lastName:"Munjal", id: 2},
    {name: "Tony", lastName:"Munjal", id: 3},
    {name: "Mariah", lastName:"Munjal", id: 4},
    {name: "Chao", lastName:"Munjal", id: 5}
  ];

  getContacts(): Contact[]{
    return this.contacts;
  }

  constructor() { }

}
