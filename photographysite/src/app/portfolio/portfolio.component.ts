import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    //change background to gray
                    // #363636
                if (event instanceof NavigationEnd) {
                    // end of loading paegs
                }
                }
            });
    }

  ngOnInit(): void {
  }

}
