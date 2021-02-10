import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionIdleReasonComponent } from './production-idle-reason.component';

describe('ProductionIdleReasonComponent', () => {
  let component: ProductionIdleReasonComponent;
  let fixture: ComponentFixture<ProductionIdleReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionIdleReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionIdleReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
