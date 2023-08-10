import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohnutComponent } from './dohnut.component';

describe('DohnutComponent', () => {
  let component: DohnutComponent;
  let fixture: ComponentFixture<DohnutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DohnutComponent]
    });
    fixture = TestBed.createComponent(DohnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
