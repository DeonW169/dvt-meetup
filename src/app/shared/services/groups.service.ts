import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupsService {
  private apiUrl =
    'https://api.meetup.com/find/groups?&sign=true&key=5c4392b6c4f7cc67271254ac6f23&location=Johannesburg&category=';
  private cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getGroups(categoryId) {
    const _url = this.apiUrl + categoryId;
    return this.runCorsGet({ url: _url });
  }

  private runCorsGet(options) {
    return this.http.get(this.cors_api_url + options.url);
  }
}
