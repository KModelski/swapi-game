import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSwitchComponent } from './resource-switch.component';

describe('ResourceSwitchComponent', () => {
  let component: ResourceSwitchComponent;
  let fixture: ComponentFixture<ResourceSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResourceSwitchComponent],
    });
    fixture = TestBed.createComponent(ResourceSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
