import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GroupsService {
  private apiUrl = 'https://api.meetup.com/find/groups';

  constructor(private http: Http) {}

  getGroups() {
    debugger;
    const authToken = sessionStorage.getItem('token');

    return this.http
      .get(this.apiUrl, {
        headers: new Headers({
          Authorization: 'Token ' + authToken
        })
      })
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }

  private handleData(res: any) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
