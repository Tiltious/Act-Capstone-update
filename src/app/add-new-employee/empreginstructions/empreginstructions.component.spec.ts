import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreginstructionsComponent } from './empreginstructions.component';

describe('EmpreginstructionsComponent', () => {
  let component: EmpreginstructionsComponent;
  let fixture: ComponentFixture<EmpreginstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreginstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreginstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
