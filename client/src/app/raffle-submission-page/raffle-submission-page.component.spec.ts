import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleSubmissionPageComponent } from './raffle-submission-page.component';

describe('RaffleSubmissionPageComponent', () => {
  let component: RaffleSubmissionPageComponent;
  let fixture: ComponentFixture<RaffleSubmissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleSubmissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleSubmissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
