import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPage = 'recipe';

  // tslint:disable-next-line:typedef
  onNavigate(page: string) {
    this.loadedPage = page;
  }
}
