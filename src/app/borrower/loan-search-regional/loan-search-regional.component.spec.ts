import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSearchRegionalComponent } from './loan-search-regional.component';

describe('LoanSearchRegionalComponent', () => {
  let component: LoanSearchRegionalComponent;
  let fixture: ComponentFixture<LoanSearchRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSearchRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSearchRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
