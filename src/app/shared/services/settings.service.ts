import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService {
  private apiUrl =
    'https://api.meetup.com/2/categories?&sign=true&key=5c4392b6c4f7cc67271254ac6f23';
  private cors_api_url = 'https://cors-anywhere.herokuapp.com/';

  constructor() {}

  getCategories() {
    this.doCORSRequest({
      method: 'GET',
      url: this.apiUrl,
      data: ''
    });
  }

  private doCORSRequest(options) {
    const x = new XMLHttpRequest();
    x.open(options.method, this.cors_api_url + options.url);
    x.onload = x.onerror = function() {
      const res = x.responseText || '';
      sessionStorage.setItem('categories', res);

      const _categories = JSON.parse(res);
      return _categories.results || {};
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
  }
}
