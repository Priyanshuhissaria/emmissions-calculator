import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Papa } from 'ngx-papaparse';
import { InputDataEntry } from '../../constants/user-input.constant';

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

  public convertCsvToJson = (file: File): InputDataEntry[] => {
    const uploadedData: InputDataEntry[] = [];
    this.papa.parse(file, {
      complete: (result) => {
        console.log('Parsed: ', result);
        for(let i=1; i<result.data.length; i++){
          const element = result.data[i];
          const entry: InputDataEntry = {
            coalConsumption: element[0],
            bioMass: element[1],
            electricityConsumption: element[2],
            incomingRoadLogistics: element[3],
            outgoingRoadLogistics: element[4],
            month: element[5],
            year: element[6],
          };
          uploadedData.push(entry);
        };
        this.uploadDataToLocalStorage(uploadedData);
      },
    });
    return uploadedData;
  };

  public uploadDataToLocalStorage = (data: InputDataEntry[]):void =>{
    localStorage.setItem('emmission-calculator-data', JSON.stringify(data));
  };
};
