import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapistRegisterComponent } from './physiotherapist-register.component';

describe('PhysiotherapistRegisterComponent', () => {
  let component: PhysiotherapistRegisterComponent;
  let fixture: ComponentFixture<PhysiotherapistRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysiotherapistRegisterComponent]
    });
    fixture = TestBed.createComponent(PhysiotherapistRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
