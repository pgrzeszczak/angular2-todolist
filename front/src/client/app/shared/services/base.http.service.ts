import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export abstract class BaseHttpService {
    constructor(protected http: Http) {}

    protected serverBase = 'http://localhost:1337';

    protected extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }
    protected handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    protected get(url: string): Observable<any[]> {
        return this.http.get(this.serverBase + url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected post(url: string, data: any): Observable<any> {
        return this.http.post(this.serverBase + url, JSON.stringify(data))
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected put(url: string, data: any): Observable<any> {
        return this.http.put(this.serverBase + url, JSON.stringify(data))
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(this.serverBase + url)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
