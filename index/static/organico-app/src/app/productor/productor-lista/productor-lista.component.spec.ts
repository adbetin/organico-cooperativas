import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorListaComponent } from './productor-lista.component';

describe('ProductorListaComponent', () => {
  let component: ProductorListaComponent;
  let fixture: ComponentFixture<ProductorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
