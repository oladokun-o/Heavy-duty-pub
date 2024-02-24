import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaulageComponent } from './haulage.component';

describe('HaulageComponent', () => {
  let component: HaulageComponent;
  let fixture: ComponentFixture<HaulageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaulageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaulageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
