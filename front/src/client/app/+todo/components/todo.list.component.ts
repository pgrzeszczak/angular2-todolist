import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  templateUrl: 'app/+todo/components/todo.list.component.html',
  styleUrls: ['app/+todo/components/todo.list.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class TodoListComponent {}
