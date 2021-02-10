import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDevelopmentComponent } from './production-development.component';

describe('ProductionDevelopmentComponent', () => {
  let component: ProductionDevelopmentComponent;
  let fixture: ComponentFixture<ProductionDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
