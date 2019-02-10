import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {
  private apiUrl =
    'https://api.meetup.com/2/categories?&sign=true&key=5c4392b6c4f7cc67271254ac6f23';
  private cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.runCorsGet({ url: this.apiUrl });
  }

  private runCorsGet(options) {
    return this.http.get(this.cors_api_url + options.url);
  }
}
