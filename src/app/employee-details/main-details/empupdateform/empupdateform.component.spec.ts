import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpupdateformComponent } from './empupdateform.component';

describe('EmpupdateformComponent', () => {
  let component: EmpupdateformComponent;
  let fixture: ComponentFixture<EmpupdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpupdateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
