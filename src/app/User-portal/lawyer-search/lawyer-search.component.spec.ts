import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerSearchComponent } from './lawyer-search.component';

describe('LawyerSearchComponent', () => {
  let component: LawyerSearchComponent;
  let fixture: ComponentFixture<LawyerSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerSearchComponent]
    });
    fixture = TestBed.createComponent(LawyerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
