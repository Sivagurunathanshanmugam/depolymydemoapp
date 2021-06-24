import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  msg=false;
  constructor(private user:ApiService) { }
  update=new FormGroup({
    EmployeeName:new FormControl("",[Validators.required]),
    Designation:new FormControl(""),
    Salary:new FormControl(""),
    Email:new FormControl("",[Validators.required]),
    Mobile:new FormControl("",[Validators.minLength(10)]),
    Qualification:new FormControl(""),
    Manager:new FormControl(""),
    
  })
  ngOnInit(): void {
    
  }
  get EmployeeName(){return this.update.get('EmployeeName')}
  updatedata(){
    this.user.savedata(this.update.value).subscribe(flow=>{
      this.update.reset({});
    })
    this.msg=true;
  }
  close(){
    this.msg=false;
  }
 
}
export class ButtonOverviewExample {}
