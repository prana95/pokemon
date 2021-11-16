import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokenomEditComponent } from './pokenom-edit.component';

describe('PokenomEditComponent', () => {
  let component: PokenomEditComponent;
  let fixture: ComponentFixture<PokenomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokenomEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokenomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
