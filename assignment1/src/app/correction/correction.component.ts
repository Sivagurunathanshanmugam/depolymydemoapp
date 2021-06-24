import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {
  msg=false;
  constructor(private reupdate:ApiService,private reuser:ActivatedRoute) { }
  editer=new FormGroup({
    EmployeeName:new FormControl("",[Validators.required]),
    Designation:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(6),Validators.pattern('[A-Z0-9]*')]),
    Salary:new FormControl(""),
    Email:new FormControl("",[Validators.required]),
    Mobile:new FormControl("",[Validators.minLength(10)]),
    Qualification:new FormControl(""),
    Manager:new FormControl(""),
  })
  ngOnInit(): void {
    this.reupdate.currentdata(this.reuser.snapshot.params.id).subscribe(using=>{
      this.editer=new FormGroup({
        EmployeeName:new FormControl(using['EmployeeName']),
        Designation:new FormControl(using['Designation'],[Validators.minLength(3),Validators.maxLength(6),Validators.pattern('[A-Z0-9]*')]),
        Salary:new FormControl(using['Salary']),
        Email:new FormControl(using['Email'],[Validators.required]),
        Mobile:new FormControl(using['Mobile'],[Validators.minLength(10)]),
        Qualification:new FormControl(using['Qualification']),
        Manager:new FormControl(using['Manager']),
      })
    })
  }
  close(){
    this.msg=false;
  }
 
  neweditdata(){
    this.reupdate.transferdata(this.reuser.snapshot.params.id,this.editer.value).subscribe(flow=>{
      this.msg=true;
      this.editer.reset({});
    })
  }
}
export class ButtonOverviewExample {}
