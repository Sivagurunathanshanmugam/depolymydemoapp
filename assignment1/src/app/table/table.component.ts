import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  list:any=[];
  constructor(private details:ApiService) {
    this.details.showdata().subscribe(data=>{
      this.list=data;
    })
   }

  ngOnInit(): void {
  }
  trashdata(item){
    this.list.splice(item-1,1);
    this.details.deletedata(item).subscribe(exit=>{

    })
  }
}
