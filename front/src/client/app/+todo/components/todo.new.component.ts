import {Component, Output, EventEmitter, HostBinding} from 'angular2/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';

@Component({
    selector: 'todo-new',
    templateUrl: 'app/+todo/components/todo.new.component.html',
    styleUrls: ['app/shared/styles/flex.fillspace.css']
})
export class TodoNewComponent {
    name: string = '';
    @HostBinding('class.flexibleFillSpace') true: boolean;
    @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();
    constructor(private todoService: TodoService) {}

    addTodo() {
        if (this.name) {
            let todo = new Todo();
            todo.name = this.name;
            todo.done = false;
            this.todoService.add(todo)
                .subscribe((todo) => {
                    this.add.emit(todo);
                    this.name = '';
                });
        }
    }
}
