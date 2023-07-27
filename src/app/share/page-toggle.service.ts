import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { ClockComponent } from '../section/clock/clock.component';

@Injectable({
  providedIn: 'root'
})
export class PageToggleService {
  routingCount: number = 0

  constructor(private router: Router) { }

  goPage(target: string) {
    console.log(this.routingCount++)
    
    this.router.navigateByUrl(target)
  }
}
