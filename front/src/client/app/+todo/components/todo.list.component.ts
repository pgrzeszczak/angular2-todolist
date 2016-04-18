import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';
import {TodoNewComponent} from './todo.new.component';
import {TodoEntryComponent} from './todo.entry.component';
import * as _ from 'lodash';

@Component({
  templateUrl: 'app/+todo/components/todo.list.component.html',
  styleUrls: ['app/+todo/components/todo.list.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, TodoNewComponent, TodoEntryComponent]
})
export class TodoListComponent implements OnInit {
    constructor(private todoService: TodoService) {}

    todos: Todo[];

    ngOnInit() {
    this.todoService.getTodos()
        .subscribe((todos) => {
          this.todos = todos;
        });
    }

    onAdd(todo: Todo) {
        this.todos.push(todo);
    }

    onRemove(todo: Todo) {
        _.remove(this.todos, (l_todo) => l_todo.id === todo.id);
    }
}
