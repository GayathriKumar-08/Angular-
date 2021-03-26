import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpromiseComponent } from './expromise.component';

describe('ExpromiseComponent', () => {
  let component: ExpromiseComponent;
  let fixture: ComponentFixture<ExpromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
