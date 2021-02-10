import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOperationComponent } from './production-operation.component';

describe('ProductionOperationComponent', () => {
  let component: ProductionOperationComponent;
  let fixture: ComponentFixture<ProductionOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
