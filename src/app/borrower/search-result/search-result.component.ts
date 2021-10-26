import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  title = 'ummed';
  mfi: any=[];
  retail: any = [];
  data: any = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(({id})=>{
      this.http.get('http://127.0.0.1:3000/api/loan/offerings/'+id).subscribe((res: any)=>{
        this.mfi = res.rows.filter((o: any)=> o.OFFERING_OWNER_TYPE == "MFI");
        this.retail = res.rows.filter((o: any)=> o.OFFERING_OWNER_TYPE == "Retail Lender");
      })
    })
    
  }
  setData(value: any){
    this.data = value;
  }

  apply(value: any){
    var elem: any = {
      'borrower_id':JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem('user')))).user_id,
      'lender_id': value.OFFERING_OWNER_ID,
      'cap_amount': value.CAP_AMOUNT,
      'int_rate': value.INTEREST_RATE,
      'purpose': value.OFFERING_TYPE
    };
    this.http.post('http://127.0.0.1:3000/api/loan/apply', elem).subscribe(()=>{
      this.router.navigate(['/success-message']);
    });
  }
}
