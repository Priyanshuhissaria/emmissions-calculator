import { NgModule } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { CommonModule } from '@angular/common';
import { PapaParseModule } from 'ngx-papaparse';



@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    CommonModule,
    PapaParseModule,
  ]
})
export class UserInputModule { }
