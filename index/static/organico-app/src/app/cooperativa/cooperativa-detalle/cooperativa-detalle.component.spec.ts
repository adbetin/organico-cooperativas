import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativaDetalleComponent } from './cooperativa-detalle.component';

describe('CooperativaDetalleComponent', () => {
  let component: CooperativaDetalleComponent;
  let fixture: ComponentFixture<CooperativaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
