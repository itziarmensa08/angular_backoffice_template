import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherstationComponent } from './weatherstation.component';

describe('WeatherstationComponent', () => {
  let component: WeatherstationComponent;
  let fixture: ComponentFixture<WeatherstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherstationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
