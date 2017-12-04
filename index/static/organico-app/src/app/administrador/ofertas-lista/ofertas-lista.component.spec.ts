import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasListaComponent } from './ofertas-lista.component';

describe('OfertasListaComponent', () => {
  let component: OfertasListaComponent;
  let fixture: ComponentFixture<OfertasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
