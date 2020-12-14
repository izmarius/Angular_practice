import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() pageSelected = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}
