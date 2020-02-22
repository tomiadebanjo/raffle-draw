import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleWinnerComponent } from './raffle-winner.component';

describe('RaffleWinnerComponent', () => {
  let component: RaffleWinnerComponent;
  let fixture: ComponentFixture<RaffleWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
