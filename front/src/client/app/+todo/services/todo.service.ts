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

    private getTodosUrl = '/todo';

    getTodos(): Observable<Todo[]> {
        return this.get(this.getTodosUrl);
    }
}
