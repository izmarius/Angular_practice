import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  displayDetails = 'none';
  timestamps = [];

  // tslint:disable-next-line:typedef
  onDisplayDetails() {
    this.timestamps.push(new Date().toISOString());
    this.displayDetails === 'none' ? this.displayDetails = 'block' : this.displayDetails = 'none';
  }

  // tslint:disable-next-line:typedef
  getDisplayDetails() {
    return this.displayDetails;
  }

  // tslint:disable-next-line:typedef
  setConditionalColor(index, color) {
    if (index > 3) {
      return color;
    }
  }
}
