import { Component, OnInit } from '@angular/core';
import { TodoAdd } from 'src/app/actions/todo.action';
import { Todo } from 'src/app/models/Todo';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store:Store<{todos:Todo[]}>) {}

    AddTodo(todo:string) {
      const newTodo = new Todo();
      newTodo.title= todo;
      this.store.dispatch(new TodoAdd(newTodo))
    }

  ngOnInit(): void {
  }

}
