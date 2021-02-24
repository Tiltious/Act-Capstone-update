import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevupdateformComponent } from './devupdateform.component';

describe('DevupdateformComponent', () => {
  let component: DevupdateformComponent;
  let fixture: ComponentFixture<DevupdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevupdateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
