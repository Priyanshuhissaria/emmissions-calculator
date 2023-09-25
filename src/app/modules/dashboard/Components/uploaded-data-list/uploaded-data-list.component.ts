import { Component, OnInit } from '@angular/core';
import { UploadedListService } from '../../Services/uploaded-list/uploaded-list.service';
import { InputDataEntry } from 'src/app/modules/user-input/constants/user-input.constant';
import { TABLE_METADATA } from '../../Constants/uploaded-list.constant';

@Component({
  selector: 'app-uploaded-data-list',
  templateUrl: './uploaded-data-list.component.html',
  styleUrls: ['./uploaded-data-list.component.css'],
})
export class UploadedDataListComponent implements OnInit {
  constructor(private uploadedListService: UploadedListService) {}
  public uploadedList: any[] = [];
  public tableMetaData = TABLE_METADATA;

  ngOnInit(): void {
    this.getUploadedList();
  }

  private getUploadedList = () => {
    setTimeout(() => {
      this.uploadedList = this.uploadedListService.getUploadedList();
    }, 3000);
  };
}
