import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsphaltsComponent } from './asphalts.component';

describe('AsphaltsComponent', () => {
  let component: AsphaltsComponent;
  let fixture: ComponentFixture<AsphaltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsphaltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsphaltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
