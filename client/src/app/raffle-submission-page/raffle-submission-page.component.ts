import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../service/app.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-raffle-submission-page',
  templateUrl: './raffle-submission-page.component.html',
  styleUrls: ['./raffle-submission-page.component.scss']
})
export class RaffleSubmissionPageComponent implements OnInit {
  userDetails = {
    name: '',
    church: '',
    team: ''
  };
  userDetailsLoading = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const email = params.get('email');
      this.fetchUserDetails(email);
    });
  }

  fetchUserDetails(parameter) {
    this.appService.getUserDetails(parameter).subscribe(
      response => {
        console.log(response, 'User details fetched');
        this.userDetails = {
          name: `${response.data.firstName} ${response.data.lastName}`,
          church: response.data.church.name,
          team: response.data.team.name
        };
        this.userDetailsLoading = false;
        this.errorMessage = '';
      },
      error => {
        this.userDetailsLoading = false;

        this.errorMessage = error;
        console.log(error);
      }
    );
  }
}
