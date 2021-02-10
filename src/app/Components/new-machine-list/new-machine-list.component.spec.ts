import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMachineListComponent } from './new-machine-list.component';

describe('NewMachineListComponent', () => {
  let component: NewMachineListComponent;
  let fixture: ComponentFixture<NewMachineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMachineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
