import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RaffleFormPageComponent } from './raffle-form-page/raffle-form-page.component';
import { RaffleSubmissionPageComponent } from './raffle-submission-page/raffle-submission-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'raffle/apply', component: RaffleFormPageComponent },
  { path: 'raffle/submission/:email', component: RaffleSubmissionPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
