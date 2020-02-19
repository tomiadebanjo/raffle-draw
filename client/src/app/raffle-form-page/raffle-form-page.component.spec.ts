import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleFormPageComponent } from './raffle-form-page.component';

describe('RaffleFormPageComponent', () => {
  let component: RaffleFormPageComponent;
  let fixture: ComponentFixture<RaffleFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
