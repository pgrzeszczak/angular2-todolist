import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';

@Component({
  templateUrl: 'app/+todo/components/todo.list.component.html',
  styleUrls: ['app/+todo/components/todo.list.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todos: Todo[];

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
