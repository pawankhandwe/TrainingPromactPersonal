import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagementComponentComponent } from './post-management-component.component';

describe('PostManagementComponentComponent', () => {
  let component: PostManagementComponentComponent;
  let fixture: ComponentFixture<PostManagementComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostManagementComponentComponent]
    });
    fixture = TestBed.createComponent(PostManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
