import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container px-4 py-5">
      <div class="row">
        <app-target-temperature
          [currentTemp]="22"
          [maxTemp]="50"
          [ngClass]="componentClasses"></app-target-temperature>
        <app-target-temperature
          [currentTemp]="25"
          [ngClass]="componentClasses"></app-target-temperature>
        <app-target-temperature
          [currentTemp]="65"
          [minTemp]="35"
          [maxTemp]="80"
          [ngClass]="componentClasses"></app-target-temperature>
        <app-target-temperature
          [currentTemp]="0"
          [ngClass]="componentClasses"></app-target-temperature>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  componentClasses = 'col-md-3 col-sm-6 d-flex justify-content-center mb-3';
}
