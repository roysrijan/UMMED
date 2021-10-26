import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  regionalLanguage: boolean = false;

  onRegionalLanguageClick(value: string) {
    this.regionalLanguage = !this.regionalLanguage;
    if(value == 'Bengali')
    this.router.navigate(["/borrower/loan-search-regional"]);
    else this.router.navigate(["/borrower/loan-search"]);
  }

}
