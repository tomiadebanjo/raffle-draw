import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../service/app.service';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

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
  churchList;
  submitDataLoading = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  errorMessage: string;
  churchListLoading = true;

  raffleForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    lastName: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
    church: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.appService.getChurchList().subscribe(response => {
      this.churchList = response;
      this.churchListLoading = false;
    });
  }

  // log(val) {
  //   console.log(val);
  // }

  onSubmit() {
    // console.log(this.raffleForm.value);
    // this.errorMessage = 'Something went wrong. Try again!';
    this.submitDataLoading = true;
    this.errorMessage = '';
    this.appService.createUser(this.raffleForm.value).subscribe(
      data => {
        console.log(data, 'response data');
        this.submitDataLoading = false;
        this.router.navigate(['/details', this.raffleForm.value.email]);
      },
      error => {
        this.submitDataLoading = false;

        this.errorMessage = error;
        console.log(error);
      }
    );
  }
}
