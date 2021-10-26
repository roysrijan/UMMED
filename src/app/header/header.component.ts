import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  borrowerLoggedIn = false
  loggedIn = false
  constructor(private router: Router) {}

  ngOnInit(): void {
    let user = JSON.parse(
      JSON.parse(JSON.stringify(sessionStorage.getItem('user'))),
    )
    if (user) {
      this.loggedIn = true;
      if (user.role == 'Borrower') {
        this.borrowerLoggedIn = true
      }
    }
  }
  regionalLanguage: boolean = false

  onRegionalLanguageClick(value: string) {
    this.regionalLanguage = !this.regionalLanguage
    if (value == 'Bengali')
      this.router.navigate(['/borrower/loan-search-regional'])
    else this.router.navigate(['/borrower/loan-search'])
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
