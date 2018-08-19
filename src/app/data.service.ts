import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Url } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  urls:Url[];
  private messageSource = new BehaviorSubject(this.urls);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendUrls(urls: Url[]) {
    this.messageSource.next(urls);
  }
}
