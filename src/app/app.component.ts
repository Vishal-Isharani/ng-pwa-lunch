import { Component } from '@angular/core';

import { SearchService } from './common/core/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu = false;

  constructor(private searchService: SearchService) { }

  searchLocation() {
    this.searchService.searchByGeoLocation();
  }
}
