import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApiFetchComponent } from './product-api-fetch.component';

describe('ProductApiFetchComponent', () => {
  let component: ProductApiFetchComponent;
  let fixture: ComponentFixture<ProductApiFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductApiFetchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
