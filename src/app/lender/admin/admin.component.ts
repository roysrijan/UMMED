import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/api/securities/approvedloans').subscribe((res: any)=>{
      this.data = res.rows;
    });
  }

  securitize(e: any, parent: any){
    let id = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem('user')))).user_id; 
    this.http.post('http://127.0.0.1:3000/api/securities/security', {mfi_lender:id,block_amount:parent.value,loan_amount:e.LOAN_AMOUNT}).subscribe(()=>
      this.router.navigate(['/success-message'])
    )
  }

}
