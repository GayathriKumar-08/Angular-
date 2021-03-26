import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexexampleComponent } from './forexexample.component';

describe('ForexexampleComponent', () => {
  let component: ForexexampleComponent;
  let fixture: ComponentFixture<ForexexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForexexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
