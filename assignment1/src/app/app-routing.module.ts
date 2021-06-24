import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionComponent } from './correction/correction.component';
import { FormComponent } from './form/form.component';

import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"table",component:TableComponent},
  {path:"form", component:FormComponent},
  {path:"correction/:id",component:CorrectionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
