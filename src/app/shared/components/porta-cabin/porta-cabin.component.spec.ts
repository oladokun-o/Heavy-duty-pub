import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaCabinComponent } from './porta-cabin.component';

describe('PortaCabinComponent', () => {
  let component: PortaCabinComponent;
  let fixture: ComponentFixture<PortaCabinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaCabinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaCabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
