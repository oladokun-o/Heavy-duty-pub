import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsphaltComponent } from './asphalt.component';

describe('AsphaltComponent', () => {
  let component: AsphaltComponent;
  let fixture: ComponentFixture<AsphaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsphaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsphaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
