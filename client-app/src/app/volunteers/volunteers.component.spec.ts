import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersComponent } from './volunteers.component';

describe('VolunteersComponent', () => {
  let component: VolunteersComponent;
  let fixture: ComponentFixture<VolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ volunteersComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
