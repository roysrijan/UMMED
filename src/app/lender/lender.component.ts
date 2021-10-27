import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.scss']
})
export class LenderComponent {
  title = 'ummed';
  constructor(private http: HttpClient){}
  ngOnInIt(){
    //this.http.post('http://127.0.0.1:3000/api/lender/lender',body, {Headers:{}})
  }
}
