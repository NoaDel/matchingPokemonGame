import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadPageComponent } from './bad-page.component';

describe('BadPageComponent', () => {
  let component: BadPageComponent;
  let fixture: ComponentFixture<BadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
