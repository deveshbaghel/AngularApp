import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) {
    
   }
  resources: string [];
   servUrl="";
  ngOnInit() {
     this.BindData();
  }

  BindData(){
    this.http.get('http://localhost:4100/api/Get/GetEmployeeDetails')
      .toPromise()
      .then(
        res => {
      this.resources=res as string[];
        console.log(res);
        //alert(JSON.stringify(res));
      }
    )
  }
    DeleteRecord(id){
      if(confirm("Are you sure to delete")){      
        this.http.post("http://localhost:4100/api/Delete/"+id+"","",)
        .toPromise()
        .then(
          res=>{
            if(res==1){
              alert('Delete Successfully');
              this.BindData();
            }
            else{
              alert('Error');
            }
           // alert(res);
          }
        )
        }
  }
  UpdateRecord(id){
    // alert(id);
   this.router.navigate(['./login']);
  }
  GotoRegistrtion(){
    this.router.navigate(['./login']);
  }

}
