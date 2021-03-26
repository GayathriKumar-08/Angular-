import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisetableComponent } from './promisetable.component';

describe('PromisetableComponent', () => {
  let component: PromisetableComponent;
  let fixture: ComponentFixture<PromisetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
