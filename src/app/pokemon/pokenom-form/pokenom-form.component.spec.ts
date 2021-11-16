import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokenomFormComponent } from './pokenom-form.component';

describe('PokenomFormComponent', () => {
  let component: PokenomFormComponent;
  let fixture: ComponentFixture<PokenomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokenomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokenomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
