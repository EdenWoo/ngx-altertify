import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAlertifyComponent } from './ngx-alertify.component';

describe('NgxAlertifyComponent', () => {
  let component: NgxAlertifyComponent;
  let fixture: ComponentFixture<NgxAlertifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAlertifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAlertifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
