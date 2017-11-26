import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorProfileComponent } from './productor-profile.component';

describe('ProductorProfileComponent', () => {
  let component: ProductorProfileComponent;
  let fixture: ComponentFixture<ProductorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
