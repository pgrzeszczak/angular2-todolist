import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {TodoListComponent} from './todo.list.component';

@Component({
  templateUrl: 'app/+todo/components/todo.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    name: 'List',
    useAsDefault: true,
    component: TodoListComponent
  }
])
export class TodoComponent {}
