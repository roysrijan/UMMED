import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  title = 'ummed';
  dataSource:any;
  viewData: any;




  constructor(private http: HttpClient) {
    let id = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem('user')))).user_id; 
    this.http.get('http://127.0.0.1:3000/api/loan/applications/' + id).subscribe(res => {
      this.dataSource = JSON.parse(JSON.stringify(res)).rows;
      this.viewData = this.dataSource[0];
      console.log(this.dataSource);
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setData(data:any) {
    this.viewData = data;
  }
  
  getSocialScore() {
    let num = Math.floor(Math.random() * 4) + 1;
    return "assets/images/" + num + ".PNG";
  }

  onApprove(data:any) {
    this.http.post("http://127.0.0.1:3000/api/loan/process", {app_id:data.APP_ID, status:'Approved'}).subscribe(o => {
      this.title = 'success';
    });
    
  }

  onRejected(data:any) {
    this.http.post("http://127.0.0.1:3000/api/loan/process", {app_id:data.APP_ID, status:'Rejected'}).subscribe(o => {
      this.title = 'rejected';
    });
    
  }

}
