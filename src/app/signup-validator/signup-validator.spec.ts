import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupValidator } from './signup-validator';

describe('SignupValidator', () => {
  let component: SignupValidator;
  let fixture: ComponentFixture<SignupValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupValidator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupValidator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
