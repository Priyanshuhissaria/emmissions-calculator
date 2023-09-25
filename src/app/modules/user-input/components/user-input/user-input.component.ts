import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserInputServiceService } from '../../services/user-input-service/user-input-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  public userInputForm: FormGroup = new FormGroup({});
  constructor(private userInputServiceService: UserInputServiceService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm = (): void => {
    this.userInputForm = this.userInputServiceService.buildUserInputForm();
  };

  public handleFileInput = (event: any): void => {
    console.log('inside file handle');
    const target = event.target as HTMLInputElement;
    const fileToUpload: File = (target.files as FileList)[0];
    if(!this.checkFileType(fileToUpload))
      return;
    this.userInputForm.controls['uploadedFile'].setValue(fileToUpload);
  };

  public onFileDeleteBtnClick = ():void =>{
    if(this.userInputForm.controls['uploadedFile'].value){
      this.userInputForm.controls['uploadedFile'].setValue('');
    }
  }

  public onSubmitBtnClick = (): void => {
    this.userInputServiceService.convertCsvToJson(this.userInputForm.controls['uploadedFile'].value);
    this.router.navigateByUrl('/dashboard');
  };

  private checkFileType = (file: File):boolean =>{
    if(file.type !='text/csv')
      return false;
    return true;
  }
}
