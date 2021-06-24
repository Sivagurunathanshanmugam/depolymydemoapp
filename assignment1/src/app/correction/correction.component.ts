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
    Name:new FormControl(""),
    Coupen_code:new FormControl("",[Validators.minLength(3),Validators.maxLength(6),Validators.pattern('[A-Z0-9]*')])
  })
  ngOnInit(): void {
    this.reupdate.currentdata(this.reuser.snapshot.params.id).subscribe(using=>{
      this.editer=new FormGroup({
        Name:new FormControl(using['Name']),
    Coupen_code:new FormControl(using['Coupen_code'],[Validators.minLength(3),Validators.maxLength(6),Validators.pattern('[A-Z0-9]*')])
      })
    })
  }
  close(){
    this.msg=false;
  }
  get Coupen_code(){return this.editer.get('Coupen_code')}
  neweditdata(){
    this.reupdate.transferdata(this.reuser.snapshot.params.id,this.editer.value).subscribe(flow=>{
      this.msg=true;
      this.editer.reset({});
    })
  }
}
export class ButtonOverviewExample {}
