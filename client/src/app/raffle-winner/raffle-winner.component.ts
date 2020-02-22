import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-raffle-winner',
  templateUrl: './raffle-winner.component.html',
  styleUrls: ['./raffle-winner.component.scss']
})
export class RaffleWinnerComponent implements OnInit {
  userDetails = {
    name: '',
    church: '',
    team: ''
  };
  userDetailsLoading = true;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.appService.getWinner().subscribe(
      responseData => {
        // console.log(response, 'User details fetched');
        const response = responseData.data[0];
        this.userDetails = {
          name: `${response.firstName} ${response.lastName}`,
          church: response.churchData[0].name,
          team: response.teamData[0].name
        };
        this.userDetailsLoading = false;
      },
      error => {
        this.userDetailsLoading = false;
        console.log(error);
      }
    );
  }
}
