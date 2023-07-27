import { Component } from '@angular/core';
import * as moment from 'moment'
import { Subscription, interval, map } from 'rxjs';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  timeString: string = ''
  private subscription: Subscription
  
  constructor(private pageToggleService:PageToggleService, ) {
    this.subscription = interval(100).pipe(
      map(() => { 
        return moment().format('HH시 mm분 ss초')
      })
    ).subscribe(data => {
      this.timeString = data
    })
  }

  goStopwatch() {
    this.pageToggleService.goPage('/stopwatch')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
