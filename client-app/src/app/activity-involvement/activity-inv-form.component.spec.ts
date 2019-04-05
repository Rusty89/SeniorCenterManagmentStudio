import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityInvFormComponent } from './activity-inv-form.component';

describe('ActivityFormComponent', () => {
  let component: ActivityInvFormComponent;
  let fixture: ComponentFixture<ActivityInvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityInvFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityInvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
