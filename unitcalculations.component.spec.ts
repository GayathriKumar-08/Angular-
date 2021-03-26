import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitcalculationsComponent } from './unitcalculations.component';

describe('UnitcalculationsComponent', () => {
  let component: UnitcalculationsComponent;
  let fixture: ComponentFixture<UnitcalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitcalculationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitcalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
