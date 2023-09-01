import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentA1Component } from './component-a1.component';

describe('ComponentA1Component', () => {
  let component: ComponentA1Component;
  let fixture: ComponentFixture<ComponentA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentA1Component]
    });
    fixture = TestBed.createComponent(ComponentA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
