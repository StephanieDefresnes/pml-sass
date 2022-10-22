import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
    
  titlePageSubject = new BehaviorSubject('Ze blog')
    
  titlePage: Observable<string> = this.titlePageSubject.asObservable()
  
  updateTitlePage(newTitlePage: string) {
    this.titlePageSubject.next(newTitlePage)
  }
}
