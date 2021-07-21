import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenzeComponent } from './preferenze.component';

describe('PreferenzeComponent', () => {
  let component: PreferenzeComponent;
  let fixture: ComponentFixture<PreferenzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
