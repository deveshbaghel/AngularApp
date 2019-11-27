import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  email: any;
  phone: any;
  add:any;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    //   alert('page load');
  }

  signin() {
    var user={
       Name:this.name,
       Email:this.email,
       Mobile:this.phone,
       Address:this.add
    };
  
    console.log(user);
    this.http.post('http://localhost:4100/api/Save/SaveCustomer',user,)
    .toPromise()
    .then(
      res => {
        alert(JSON.stringify(res));
        this.name=null;
        this.email=null;
        this.add=null;
        this.phone=null;
        if(res=="Record Save Successfully.")
         this.router.navigate(["./List"]);
        //alert(this.name + this.email + this.phone)
      }
    )
  }
  GotoList(){
    this.router.navigate(["./List"]);
  }
}
