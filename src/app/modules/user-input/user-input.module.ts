import { NgModule } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { CommonModule } from '@angular/common';
import { PapaParseModule } from 'ngx-papaparse';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    CommonModule,
    PapaParseModule,
    RouterModule
  ]
})
export class UserInputModule { }
