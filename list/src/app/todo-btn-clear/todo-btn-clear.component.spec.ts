import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBtnClearComponent } from './todo-btn-clear.component';

describe('TodoBtnClearComponent', () => {
  let component: TodoBtnClearComponent;
  let fixture: ComponentFixture<TodoBtnClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBtnClearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBtnClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
