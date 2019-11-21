import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logChange(changeValue : string) {
    console.log(" something changed in angular and the new value is " + changeValue);
  }
}
