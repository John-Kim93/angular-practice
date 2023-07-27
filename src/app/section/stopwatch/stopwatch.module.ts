import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StopwatchComponent,
    TimeDisplayComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StopwatchComponent
  ],
})
export class StopwatchModule { }
