import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { SearchService, Result } from './../../common/core/services/search.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  form: FormGroup;
  results: Observable<Result[]>;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      search: []
    });

    this.form.controls.search.valueChanges.subscribe(v => console.log(v));

    // this.results = this.searchService.searchByTerm('thai');
    this.results = this.searchService.searchByGeoLocation();
  }
}
