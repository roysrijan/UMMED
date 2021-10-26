import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'ummed'
  role = 'Borrower'
  form: FormGroup = new FormGroup({})
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      user_id: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
    })
  }
  login() {
    sessionStorage.setItem('user', JSON.stringify(this.form.value))
    if (this.form.value.role == 'Admin') {
      window.location.href='/signup';
    } else if (this.form.value.role == 'Borrower') {
      window.location.href='/borrower/loan-search';
    } else if (this.form.value.role == 'Retail Lender') {
      window.location.href='/retail-lender';
    } else {
      window.location.href='/lender/new-applications';
    }
  }
}
