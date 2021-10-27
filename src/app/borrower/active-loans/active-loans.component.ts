import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-loans',
  templateUrl: './active-loans.component.html',
  styleUrls: ['./active-loans.component.scss']
})
export class ActiveLoansComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let userId = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem('user')))).user_id;
    this.http.get('http://127.0.0.1:3000/api/loan/activeloans/'+userId).subscribe((res: any)=>{
      this.data = res.rows;
    });
  }

  payEMI(value: any){
    this.http.get('http://127.0.0.1:3000/api/loan/repayemi/'+value).subscribe();
  }

}
