import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntlModule } from 'ng2-intl';

import { VideoComponent } from './video/video.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    IntlModule
  ],
  declarations: [
    VideoComponent,
    DropdownComponent
  ],
  exports: [
    VideoComponent,
    DropdownComponent
  ]
})

export class UIComponentModule {
}
