import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarCorreoComponent } from './activar-correo.component';

describe('ActivarCorreoComponent', () => {
  let component: ActivarCorreoComponent;
  let fixture: ComponentFixture<ActivarCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
