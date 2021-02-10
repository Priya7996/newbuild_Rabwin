import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentiveProductiveComponent } from './presentive-productive.component';

describe('PresentiveProductiveComponent', () => {
  let component: PresentiveProductiveComponent;
  let fixture: ComponentFixture<PresentiveProductiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentiveProductiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentiveProductiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
