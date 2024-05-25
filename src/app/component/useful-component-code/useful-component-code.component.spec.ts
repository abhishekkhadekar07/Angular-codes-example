import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulComponentCodeComponent } from './useful-component-code.component';

describe('UsefulComponentCodeComponent', () => {
  let component: UsefulComponentCodeComponent;
  let fixture: ComponentFixture<UsefulComponentCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefulComponentCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsefulComponentCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
