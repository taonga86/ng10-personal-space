import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(pageName) {
    // this.router.navigate(['articles', article.id]);
    this.router.navigate([pageName]);
  }
}
