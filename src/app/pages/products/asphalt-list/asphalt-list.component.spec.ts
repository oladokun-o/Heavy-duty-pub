import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsphaltListComponent } from './asphalt-list.component';

describe('AsphaltListComponent', () => {
  let component: AsphaltListComponent;
  let fixture: ComponentFixture<AsphaltListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsphaltListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsphaltListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
