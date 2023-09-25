import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserInputServiceService {

  constructor(private formBuilder: FormBuilder) { }

  public buildUserInputForm = ():FormGroup =>{
    return this.formBuilder.group({
      uploadedFile: ['', Validators.required],
    })
  }

}
