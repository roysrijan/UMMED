import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.scss']
})
export class LoanSearchComponent {
  title = 'ummed';
  loan: any = 'Medical';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}
  loanType(e: any){
    this.loan = e.target.value
  }
  loanSearch(){
    this.router.navigate(['../search-result/'+this.loan],{relativeTo: this.route});
  }
}
