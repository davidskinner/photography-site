import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
    ) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          if (event.url === '/portfolio'){
            this.renderer.removeClass(this.document.body, 'bkhome');
            this.renderer.addClass(this.document.body, 'p-background')
          }

          if(event.url === '/home'){
            this.renderer.addClass(this.document.body, 'bkhome');
            this.renderer.removeClass(this.document.body, 'p-background')
          }
          console.log(event.url);
        }

        // if (event instanceof NavigationError) {
        //   console.log(event.url);
        // }

        // if (event instanceof NavigationEnd) {
        // }
    });
}
}
