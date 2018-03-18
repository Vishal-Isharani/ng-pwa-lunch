import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap, tap } from 'rxjs/operators';

import { SearchService, Result } from './../../common/core/services/search.service';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.scss']
})
export class RestaurantViewComponent implements OnInit {
  restaurant: Observable<Result>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.restaurant = this.activatedRoute.params.pipe(
      tap(i => console.log(i)),
      switchMap(params => this.searchService.loadById(params['id']))
    );
  }

}
