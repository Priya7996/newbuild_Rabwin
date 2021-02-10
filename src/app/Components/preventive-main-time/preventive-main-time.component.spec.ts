import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveMainTimeComponent } from './preventive-main-time.component';

describe('PreventiveMainTimeComponent', () => {
  let component: PreventiveMainTimeComponent;
  let fixture: ComponentFixture<PreventiveMainTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventiveMainTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventiveMainTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
