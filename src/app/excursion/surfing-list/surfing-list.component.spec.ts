import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfingListComponent } from './surfing-list.component';

describe('SurfingListComponent', () => {
  let component: SurfingListComponent;
  let fixture: ComponentFixture<SurfingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
