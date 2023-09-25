import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root',
})
export class UserInputServiceService {
  constructor(private formBuilder: FormBuilder, private papa: Papa) {}

  public buildUserInputForm = (): FormGroup => {
    return this.formBuilder.group({
      uploadedFile: ['', Validators.required],
    });
  };

  public convertCsvToJson = (file: any) => {
    console.log("inside service");
    this.papa.parse(file, {
      complete: (result) => {
        console.log('Parsed: ', result);
      },
    });
  };
  private getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
}
