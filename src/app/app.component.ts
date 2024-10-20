import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-app';
  constructor(private router: Router,private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {


    if (window.performance.navigation.type === 1) {
      this.router.navigate(['/']);
    }


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          this.viewportScroller.scrollToAnchor(tree.fragment); // Scrolls to the fragment
        } else {
          this.viewportScroller.scrollToPosition([0, 0]); // Scrolls to the top for non-fragment links
        }
      }
    });
  }


}
