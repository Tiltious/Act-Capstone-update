import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDeleteConfirmationComponent } from './emp-delete-confirmation.component';

describe('EmpDeleteConfirmationComponent', () => {
  let component: EmpDeleteConfirmationComponent;
  let fixture: ComponentFixture<EmpDeleteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDeleteConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
