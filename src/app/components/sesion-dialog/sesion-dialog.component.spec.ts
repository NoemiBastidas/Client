import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionDialogComponent } from './sesion-dialog.component';

describe('SesionDialogComponent', () => {
  let component: SesionDialogComponent;
  let fixture: ComponentFixture<SesionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
