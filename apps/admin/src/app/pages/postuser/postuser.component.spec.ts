import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuserComponent } from './postuser.component';

describe('PostuserComponent', () => {
  let component: PostuserComponent;
  let fixture: ComponentFixture<PostuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
