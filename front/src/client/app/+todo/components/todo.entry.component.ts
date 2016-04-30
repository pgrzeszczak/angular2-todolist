import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';

@Component({
    selector: 'todo-entry',
    templateUrl: 'app/+todo/components/todo.entry.component.html',
    styleUrls: ['app/shared/styles/flex.fillspace.css', 'app/+todo/components/todo.entry.component.css']
})
export class TodoEntryComponent {
    @Input() todo: Todo;
    @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();
    constructor(private todoService: TodoService) {}

    updateTodo() {
        this.todoService.update(this.todo)
            .subscribe(() => {/*do nothing*/});
    }

    deleteTodo() {
        this.todoService.remove(this.todo)
            .subscribe((todo) => {
                this.remove.emit(todo);
            });
    }
}
