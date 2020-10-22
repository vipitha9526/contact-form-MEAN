import { Component, OnInit } from '@angular/core';
import { baseUrl } from '../../globals';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  formGroupAdd: FormGroup;
  submitted: any = false;

  constructor(
    private _http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.formGroupAdd = this.formBuilder.group({
      name: ["", Validators.required,Validators.minLength(3)],
      nikename: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // email: ["", [Validators.required]],
      masteremail: [""]
    });
   }

  ngOnInit(): void {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formGroupAdd.get(controlName).hasError(errorName);
  };

  onSubmit(){
    this.submitted = true;
    if (this.formGroupAdd.valid){
      this.formGroupAdd.get('masteremail').setValue("abcd@yopmail.com");
      debugger
      let path = baseUrl + 'contact';
      let value = this.formGroupAdd.value;
      this._http.post(path, value) .subscribe(
        (response: any) => {
          if (response.status == "success") {
            
            this.router.navigate([`/contact`]);
          } else if (response.status == "error") {
            
          }
        }
      );
    }
  }

}
