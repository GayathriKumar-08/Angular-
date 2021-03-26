import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepromiseComponent } from './updatepromise.component';

describe('UpdatepromiseComponent', () => {
  let component: UpdatepromiseComponent;
  let fixture: ComponentFixture<UpdatepromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
