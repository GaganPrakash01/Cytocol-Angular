import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerHeaderComponent } from './lawyer-header.component';

describe('LawyerHeaderComponent', () => {
  let component: LawyerHeaderComponent;
  let fixture: ComponentFixture<LawyerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerHeaderComponent]
    });
    fixture = TestBed.createComponent(LawyerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
