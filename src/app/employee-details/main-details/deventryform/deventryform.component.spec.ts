import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeventryformComponent } from './deventryform.component';

describe('DeventryformComponent', () => {
  let component: DeventryformComponent;
  let fixture: ComponentFixture<DeventryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeventryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeventryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
