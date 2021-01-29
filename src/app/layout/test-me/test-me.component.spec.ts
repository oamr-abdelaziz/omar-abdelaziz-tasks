import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMeComponent } from './test-me.component';

describe('TestMeComponent', () => {
  let component: TestMeComponent;
  let fixture: ComponentFixture<TestMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
