import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ErrorService {
  // to trigger dynamically data about error
  error$ = new Subject<string>()

  handle(message: string) {
    // notify all subscribers about error
    this.error$.next(message)
  }

  clear() {
    this.error$.next('')
  }
}
