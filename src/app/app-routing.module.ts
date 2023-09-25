import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './modules/user-input/components/user-input/user-input.component';
import { UploadedDataListComponent } from './modules/dashboard/Components/uploaded-data-list/uploaded-data-list.component';

const routes: Routes = [
  {path: '', component: UserInputComponent},
  { path: 'user-input', component: UserInputComponent },
  {path: 'dashboard', component: UploadedDataListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
