import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from "@angular/core";
// Import this, and write at the top of your .ts file
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  scrHeight:any;
  scrWidth:any;

  // constructor(private router: Router) {
  //   router.events.subscribe(
  //           (event) => {
  //               if (event instanceof NavigationStart) {
  //                   //change background to gray
  //                   // #363636
  //               if (event instanceof NavigationEnd) {
  //                   // end of loading paegs
  //               }
  //               }
  //           });
  //   }

  // Constructor
constructor() {
  this.getScreenSize();
}

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log('height: ' + this.scrHeight + '\n','width: '+ this.scrWidth);
}


  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
  }

}
