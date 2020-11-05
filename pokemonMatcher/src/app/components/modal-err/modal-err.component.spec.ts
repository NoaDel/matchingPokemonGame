import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrComponent } from './modal-err.component';

describe('ModalErrComponent', () => {
  let component: ModalErrComponent;
  let fixture: ComponentFixture<ModalErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalErrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
