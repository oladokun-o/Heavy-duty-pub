import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinComponent } from './cabin.component';

describe('CabinComponent', () => {
  let component: CabinComponent;
  let fixture: ComponentFixture<CabinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
