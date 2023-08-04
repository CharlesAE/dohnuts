import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohnutsComponent } from './dohnuts.component';

describe('DohnutsComponent', () => {
  let component: DohnutsComponent;
  let fixture: ComponentFixture<DohnutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DohnutsComponent]
    });
    fixture = TestBed.createComponent(DohnutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
