import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorEditarComponent  } from './productorEditar.component';

describe('ProductorEditarComponent', () => {
  let component: ProductorEditarComponent;
  let fixture: ComponentFixture<ProductorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
