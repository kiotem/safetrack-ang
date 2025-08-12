import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCard } from './vendor-card';

describe('VendorCard', () => {
  let component: VendorCard;
  let fixture: ComponentFixture<VendorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
