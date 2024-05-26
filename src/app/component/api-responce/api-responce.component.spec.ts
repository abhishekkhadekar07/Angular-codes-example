import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponceComponent } from './api-responce.component';

describe('ApiResponceComponent', () => {
  let component: ApiResponceComponent;
  let fixture: ComponentFixture<ApiResponceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiResponceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiResponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
