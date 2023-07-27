import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {


  @Output() clickEvent = new EventEmitter()

  constructor () {}

  executeButton(command: string) {
    this.clickEvent.emit(command)
  }
}
