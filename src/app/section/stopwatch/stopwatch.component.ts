import { Component, OnInit } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit{

  prop: string = ""

  constructor(
    private pageToggleService: PageToggleService
  ) {
  }

  goClock(){
    this.pageToggleService.goPage('/clock')
  }

  executeButton(command: string) {
    this.prop = command
  }

  ngOnInit(): void {
    
  }
}
