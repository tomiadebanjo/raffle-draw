import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppService } from '../service/app.service';
import { map } from 'rxjs/operators';
import { Church } from '../models/church';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-raffle-form-page',
  templateUrl: './raffle-form-page.component.html',
  styleUrls: ['./raffle-form-page.component.scss']
})
export class RaffleFormPageComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  churchList;
  submitDataLoading: true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  raffleForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    lastName: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
    church: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.churchList = this.appService.getChurchList();
  }

  log(val) {
    console.log(val);
  }

  onSubmit() {
    console.log(this.raffleForm.value);
  }
}
