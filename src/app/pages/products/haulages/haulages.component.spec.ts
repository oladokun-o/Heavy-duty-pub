import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaulagesComponent } from './haulages.component';

describe('HaulagesComponent', () => {
  let component: HaulagesComponent;
  let fixture: ComponentFixture<HaulagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaulagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaulagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
