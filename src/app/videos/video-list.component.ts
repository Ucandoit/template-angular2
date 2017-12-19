import {
  Component,
  OnInit
} from '@angular/core';

const debug = require('debug')('camilla:VideoListComponent');

@Component({
  selector: 'video-list',
  templateUrl: 'video-list.component.html'
})
export class VideoListComponent implements OnInit {

  public test: string = '15.11.28 如果你拥抱我';
  public coverUrl: string = 'assets/img/test.png';
  public selectedYear: string = 'ALL';
  public yearFilter: string[] = APP_CONFIG.yearFilter;
  public sort: string = 'DATE';

  constructor() {}

  public ngOnInit() {
    debug('hello `video-list` component');
  }

  public setSelectedYear(year: string) {
    this.selectedYear = year;
  }
}
