import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlogComponent } from './glog.component';

describe('GlogComponent', () => {
  let component: GlogComponent;
  let fixture: ComponentFixture<GlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
