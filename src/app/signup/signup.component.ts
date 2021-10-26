import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  title = 'ummed';
  form: FormGroup = new FormGroup({});
  constructor(private http: HttpClient, private fb: FormBuilder){}
  ngOnInit(){
     this.form = this.fb.group({
      borrower_type: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),       
      govt_id: new FormControl(),
      address: new FormControl(),
      phone_number: new FormControl(),
      pin_code: new FormControl(),
      user_id: new FormControl(),
      date_of_birth: new FormControl(),
      gender: new FormControl(),
      shg_affliation: new FormControl(),
      affiliated_shg_name: new FormControl()
    })
  }
  register(){
    this.http.post('http://127.0.0.1:3000/api/borrower/borrower',this.form.value, {headers: {'Content-Type': 'application/json'}}).subscribe(()=>{
      this.title = 'success';
    },
    ()=>{
      this.title = 'failure';
    })
  }
}
