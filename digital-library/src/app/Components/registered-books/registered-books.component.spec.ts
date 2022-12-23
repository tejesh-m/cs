import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredBooksComponent } from './registered-books.component';

describe('RegisteredBooksComponent', () => {
  let component: RegisteredBooksComponent;
  let fixture: ComponentFixture<RegisteredBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
