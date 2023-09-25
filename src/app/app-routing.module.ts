import { NgModule, OnInit } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './modules/user-input/components/user-input/user-input.component';

const routes: Routes = [
  { 'path': 'user-input',
    'component': UserInputComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{ 

  constructor(){}

  ngOnInit(): void {  } 
}
