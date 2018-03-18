import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {
  constructor() { }

  getLocation() {
    return new Observable<Coordinates>(observer => {
      navigator.geolocation.getCurrentPosition(location => {
        observer.next(location.coords);
        observer.complete();
      });
    });
  }
}
