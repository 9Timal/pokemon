import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BorderCardDirective } from './border-card.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet,
    BorderCardDirective,

    PageNotFoundComponent ],
  templateUrl:'app.component.html'
}) 
export class AppComponent  {}
 