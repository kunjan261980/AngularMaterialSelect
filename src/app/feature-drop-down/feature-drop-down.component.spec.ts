import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDropDownComponent } from './feature-drop-down.component';

describe('FeatureDropDownComponent', () => {
  let component: FeatureDropDownComponent;
  let fixture: ComponentFixture<FeatureDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
