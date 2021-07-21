import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostituzioniComponent } from './sostituzioni.component';

describe('SostituzioniComponent', () => {
  let component: SostituzioniComponent;
  let fixture: ComponentFixture<SostituzioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SostituzioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SostituzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
