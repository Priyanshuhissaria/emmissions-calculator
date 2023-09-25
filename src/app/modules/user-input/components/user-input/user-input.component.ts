import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserInputServiceService } from '../../services/user-input-service/user-input-service.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  public userInputForm : FormGroup = new FormGroup({});
  constructor(private userInputServiceService: UserInputServiceService){};

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm = (): void=>{
    this.userInputForm = this.userInputServiceService.buildUserInputForm();
  }
}
