import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  compare(a: any, b: any, field?: string) {

    if (field) {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      }
    } else {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
    }
    // a must be equal to b
    return 0;
  }

  get randomId(): number {
    return Math.floor(Math.random() * 100000000);
  }

}
