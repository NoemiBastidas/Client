import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInicioAdminComponent } from './modal-inicio-admin.component';

describe('ModalInicioAdminComponent', () => {
  let component: ModalInicioAdminComponent;
  let fixture: ComponentFixture<ModalInicioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInicioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
