import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperatorComponent } from './new-operator.component';

describe('NewOperatorComponent', () => {
  let component: NewOperatorComponent;
  let fixture: ComponentFixture<NewOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
