import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, concatMap, switchMap } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { LocationService } from './location.service';

export interface Result {
  geometry: {
    location: {
      lat: number;
      lng: number;
    },
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      },
      southwest: {
        lat: number;
        lng: number;
      }
    }
  };
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean,
    weekday_text: string[]
  };
  photos: [
    {
      height: number,
      html_attributions: string[];
      photo_reference: string;
      width: number;
    }
  ];
  place_id: string;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  vicinity: string;
}

const localendpoint = '';
const radius = 10 * 1609.34;

@Injectable()
export class SearchService {
  constructor(
    private httpClient: HttpClient,
    private locationService: LocationService
  ) { }

  searchByGeoLocation() {
    return this.locationService.getLocation().pipe(
      switchMap(location =>
        // tslint:disable-next-line:max-line-length
        this.httpClient.get(`${environment.searchApiUrl}/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=${radius}&type=restaurant&keyword=food`)
      ),
      map((data: any) => data.results as Result[])
    );
  }

  loadById(id: string) {
    // https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJlwmaibpF2YcRMv9F5Y_qX94
    return this.httpClient.get<{ result: Result }>(`${environment.searchApiUrl}/maps/api/place/details/json?placeid=${id}`).pipe(
      map(i => i.result)
    );
  }

  // searchByTerm(query: string): Observable<Result[]> {
  //   return of(fakeResults.results as Result[]);
  // }
}
