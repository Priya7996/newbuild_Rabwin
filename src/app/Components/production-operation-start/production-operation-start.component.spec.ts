import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOperationStartComponent } from './production-operation-start.component';

describe('ProductionOperationStartComponent', () => {
  let component: ProductionOperationStartComponent;
  let fixture: ComponentFixture<ProductionOperationStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOperationStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOperationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
