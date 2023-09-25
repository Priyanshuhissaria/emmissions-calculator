import { Injectable } from '@angular/core';
import { InputDataEntry } from 'src/app/modules/user-input/constants/user-input.constant';

@Injectable({
  providedIn: 'root'
})
export class UploadedListService {

  constructor() { }

  public getUploadedList = (): InputDataEntry[]=>{
    const data = localStorage.getItem('emmission-calculator-data');
    return JSON.parse(data as string);
  }
}
