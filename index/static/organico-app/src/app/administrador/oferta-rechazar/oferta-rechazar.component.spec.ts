import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaRechazarComponent } from './oferta-rechazar.component';

describe('OfertaRechazarComponent', () => {
  let component: OfertaRechazarComponent;
  let fixture: ComponentFixture<OfertaRechazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaRechazarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaRechazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
