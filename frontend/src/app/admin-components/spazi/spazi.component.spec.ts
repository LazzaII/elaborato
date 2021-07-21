import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaziComponent } from './spazi.component';

describe('SpaziComponent', () => {
  let component: SpaziComponent;
  let fixture: ComponentFixture<SpaziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
