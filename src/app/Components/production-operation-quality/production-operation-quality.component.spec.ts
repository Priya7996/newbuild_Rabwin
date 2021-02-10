import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOperationQualityComponent } from './production-operation-quality.component';

describe('ProductionOperationQualityComponent', () => {
  let component: ProductionOperationQualityComponent;
  let fixture: ComponentFixture<ProductionOperationQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOperationQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOperationQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
