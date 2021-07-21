import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessiComponent } from './accessi.component';

describe('AccessiComponent', () => {
  let component: AccessiComponent;
  let fixture: ComponentFixture<AccessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
