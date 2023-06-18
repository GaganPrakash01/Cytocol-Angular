import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawSearchComponent } from './law-search.component';

describe('LawSearchComponent', () => {
  let component: LawSearchComponent;
  let fixture: ComponentFixture<LawSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawSearchComponent]
    });
    fixture = TestBed.createComponent(LawSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
