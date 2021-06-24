import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { CorrectionComponent } from './correction/correction.component';
@NgModule({
  declarations: [
    AppComponent,

    TableComponent,
     FormComponent,
     CorrectionComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,MatToolbarModule,MatTableModule,FormsModule,
    AppRoutingModule,MatIconModule,MatButtonModule, HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
