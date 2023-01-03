import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdminConfirmationComponent } from './dialog-admin-confirmation.component';

describe('DialogAdminConfirmationComponent', () => {
  let component: DialogAdminConfirmationComponent;
  let fixture: ComponentFixture<DialogAdminConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdminConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAdminConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
