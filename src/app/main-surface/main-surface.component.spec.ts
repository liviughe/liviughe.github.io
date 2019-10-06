import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSurfaceComponent } from './main-surface.component';

describe('MainSurfaceComponent', () => {
  let component: MainSurfaceComponent;
  let fixture: ComponentFixture<MainSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
