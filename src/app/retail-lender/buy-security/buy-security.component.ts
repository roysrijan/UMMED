import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-security',
  templateUrl: './buy-security.component.html',
  styleUrls: ['./buy-security.component.scss']
})
export class BuySecurityComponent implements OnInit {

  data: any;
  loanDetails: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/api/securities/currentSecurities').subscribe((res: any)=>{
      this.data = res.rows;
    });
  }

  buy(e: any, parent: any){
    let id = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem('user')))).user_id; 
    this.http.post('http://127.0.0.1:3000/api/securities/buy', {lender_id:id,sec_count:parent.value,loan_id:e.LOAN_ID}).subscribe(()=>
      this.router.navigate(['/success-message'])
    )
  }

  setLoadDeatils(element: any){
    this.loanDetails = element;
  }

}
