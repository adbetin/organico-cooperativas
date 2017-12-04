import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaAceptarComponent } from './oferta-aceptar.component';

describe('OfertaAceptarComponent', () => {
  let component: OfertaAceptarComponent;
  let fixture: ComponentFixture<OfertaAceptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaAceptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
