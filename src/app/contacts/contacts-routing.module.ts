import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
// import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {path:'', component: ContactListComponent},
  {path:'add', component: ContactAddComponent},
  // {path:'edit/:id', component: ContactEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
