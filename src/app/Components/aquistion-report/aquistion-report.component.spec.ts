import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquistionReportComponent } from './aquistion-report.component';

describe('AquistionReportComponent', () => {
  let component: AquistionReportComponent;
  let fixture: ComponentFixture<AquistionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquistionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquistionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
