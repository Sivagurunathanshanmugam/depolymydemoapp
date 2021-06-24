import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  name:any;
  x="guru";
 result:any;
  change(){
  this.result=this.name
  }
}
export class ToolbarOverviewExample {}
export class ButtonOverviewExample {}