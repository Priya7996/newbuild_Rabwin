import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOperationIdleComponent } from './production-operation-idle.component';

describe('ProductionOperationIdleComponent', () => {
  let component: ProductionOperationIdleComponent;
  let fixture: ComponentFixture<ProductionOperationIdleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionOperationIdleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOperationIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
