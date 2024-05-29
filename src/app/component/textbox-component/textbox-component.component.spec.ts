import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponentComponent } from './textbox-component.component';

describe('TextboxComponentComponent', () => {
  let component: TextboxComponentComponent;
  let fixture: ComponentFixture<TextboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
