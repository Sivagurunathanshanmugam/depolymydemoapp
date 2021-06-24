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
    Name:new FormControl(""),
    Coupen_code:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(6),Validators.pattern('[A-Z0-9]*')]),
  })
  ngOnInit(): void {
    
  }
  get Coupen_code(){return this.update.get('Coupen_code')}
  updatedata(){
    this.user.savedata(this.update.value).subscribe(flow=>{
      this.update.reset({});
    })
    this.msg=true;
  }
  close(){
    this.msg=false;
  }
  change(){
    alert("Please enter the valid Coupencode");
  }
}
export class ButtonOverviewExample {}
