import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../globals';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: any = [];

  constructor(
    private _http: HttpClient,
    private router: Router,) { }

  ngOnInit(): void {
    this.getContact()
  }

  getContact() {
    this._http.get(baseUrl + 'contact')
      .subscribe((responses: any) => {
        this.contactList = responses.data;
      })
  }

  onAdd() {
    this.router.navigate([`/contact/add`])
  }

}
