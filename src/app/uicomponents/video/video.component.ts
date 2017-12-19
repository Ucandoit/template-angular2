import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-video',
  templateUrl: 'video.component.html'
})
export class VideoComponent {

  @Input() public title: string;
  @Input() public url: string;
  @Input() public coverImg: string;

}
