import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationComponentComponent } from './geo-location-component.component';

describe('GeoLocationComponentComponent', () => {
  let component: GeoLocationComponentComponent;
  let fixture: ComponentFixture<GeoLocationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoLocationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoLocationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
