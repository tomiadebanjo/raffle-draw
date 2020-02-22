import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleUsersComponent } from './raffle-users.component';

describe('RaffleUsersComponent', () => {
  let component: RaffleUsersComponent;
  let fixture: ComponentFixture<RaffleUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
