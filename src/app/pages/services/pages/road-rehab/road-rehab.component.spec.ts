import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadRehabComponent } from './road-rehab.component';

describe('RoadRehabComponent', () => {
  let component: RoadRehabComponent;
  let fixture: ComponentFixture<RoadRehabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadRehabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadRehabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
