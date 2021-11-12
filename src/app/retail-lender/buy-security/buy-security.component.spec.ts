import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySecurityComponent } from './buy-security.component';

describe('BuySecurityComponent', () => {
  let component: BuySecurityComponent;
  let fixture: ComponentFixture<BuySecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
