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
            this.renderer.addClass(this.document.body, 'p-background');
          }

          if (event.url === '/home'){
            this.renderer.addClass(this.document.body, 'bkhome');
            this.renderer.removeClass(this.document.body, 'p-background');
          }
          console.log(event.url);
        }
    });
}
}

// todo: test this
// import {
//   Injectable,
//   OnDestroy,
// } from '@angular/core';
// import {
//   Subject,
//   BehaviorSubject,
//   fromEvent,
// } from 'rxjs';
// import {
//   takeUntil,
//   debounceTime,
// } from 'rxjs/operators';

// @Injectable()
// export class ResponsiveService implements OnDestroy {
//   private _unsubscriber$: Subject<any> = new Subject();
//   public screenWidth$: BehaviorSubject<number> = new BehaviorSubject(null);
//   public mediaBreakpoint$: BehaviorSubject<string> = new BehaviorSubject(null);

//   constructor() {}

//   init() {
//     this._setScreenWidth(window.innerWidth);
//     this._setMediaBreakpoint(window.innerWidth);
//     fromEvent(window, 'resize')
//       .pipe(
//         debounceTime(1000),
//         takeUntil(this._unsubscriber$)
//       ).subscribe((evt: any) => {
//         this._setScreenWidth(evt.target.innerWidth);
//         this._setMediaBreakpoint(evt.target.innerWidth);
//       });
//   }

//   ngOnDestroy() {
//     this._unsubscriber$.next();
//     this._unsubscriber$.complete();
//   }

//   private _setScreenWidth(width: number): void {
//     this.screenWidth$.next(width);
//   }

//   private _setMediaBreakpoint(width: number): void {
//     if (width < 576) {
//       this.mediaBreakpoint$.next('xs');
//     } else if (width >= 576 && width < 768) {
//       this.mediaBreakpoint$.next('sm');
//     } else if (width >= 768 && width < 992) {
//       this.mediaBreakpoint$.next('md');
//     } else if (width >= 992 && width < 1200) {
//       this.mediaBreakpoint$.next('lg');
//     } else if (width >= 1200 && width < 1600) {
//       this.mediaBreakpoint$.next('xl');
//     } else {
//       this.mediaBreakpoint$.next('xxl');
//     }
//   }

// }