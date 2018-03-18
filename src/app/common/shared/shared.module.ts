import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxNavDrawerModule } from 'ngx-nav-drawer';
import { NgxInputStarRatingModule } from 'ngx-input-star-rating';
import { NgxLoadersModule } from 'ngx-loaders';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  NgxNavDrawerModule,
  NgxInputStarRatingModule,
  NgxLoadersModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class SharedModule { }
