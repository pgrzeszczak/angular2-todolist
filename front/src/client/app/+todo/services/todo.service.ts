import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {BaseHttpService} from '../../shared/index';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../index';

@Injectable()
export class TodoService extends BaseHttpService {

    constructor(http: Http) {
        super(http);
    }

    private todoUrl = '/todo';

    getTodos(): Observable<Todo[]> {
        return this.get(this.todoUrl);
    }

    add(todo: Todo) {
        return this.post(this.todoUrl, todo);
    }

    remove(todo: Todo) {
        return this.delete(this.todoUrl + '/' + todo.id);
    }

    update(todo: Todo) {
        return this.put(this.todoUrl + '/' + todo.id, todo);
    }
}
