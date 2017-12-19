import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-dropdown',
  templateUrl: 'dropdown.component.html'
})
export class DropdownComponent {

  @Input() public id: string;
  @Input() public label: string;
  @Input() public class: string;
  @Input() public options: any[];
  @Input() public selected: string;
  @Output() private onSelected: EventEmitter<string> = new EventEmitter();

  public setSelected(option: string) {
    this.onSelected.emit(option);
  }

}
