import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAwarenessComponent } from './finance-awareness.component';

describe('FinanceAwarenessComponent', () => {
  let component: FinanceAwarenessComponent;
  let fixture: ComponentFixture<FinanceAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceAwarenessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
