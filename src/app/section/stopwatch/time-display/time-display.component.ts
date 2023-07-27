import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent {

  @Input() inputData: string = "";
  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval: any;

  constructor() {
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      if (this.ms >= 100) {
        this.ms = 0
        this.sec++
      }
      if (this.sec >= 60) {
        this.sec = 0
        this.min++
      }
      this.ms++
    }, 10)
  }
  timeStop() {
    clearInterval(this.timeInterval)
  }
  timeReset() {
    this.timeStop()
    this.ms = 0
    this.sec = 0
    this.min = 0
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
    for (const prop in changes) {
      if (prop == "inputData") {
        switch (changes[prop].currentValue) {
          case "start":
            this.timeStart()
            break
          case "stop":
            this.timeStop()
            break
          case "reset":
            this.timeReset()
        }
      }
    }
  }

  ngOnInit() {
    console.log('ngOnInit')
  }
  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }
  ngDestroyed() {
    console.log('ngDestroyed')
  }
}
