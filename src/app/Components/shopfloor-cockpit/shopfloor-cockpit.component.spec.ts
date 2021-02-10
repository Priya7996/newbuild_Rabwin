import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfloorCockpitComponent } from './shopfloor-cockpit.component';

describe('ShopfloorCockpitComponent', () => {
  let component: ShopfloorCockpitComponent;
  let fixture: ComponentFixture<ShopfloorCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopfloorCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfloorCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
