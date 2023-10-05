import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-target-temperature',
  templateUrl: './target-temperature.component.html',
  styleUrls: ['./target-temperature.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
})
export class TargetTemperatureComponent implements OnInit {
  @Input() minTemp: number = 0;
  @Input() maxTemp: number = 100;
  @Input({ required: true }) currentTemp: number;

  indicatorPos = 0;

  ngOnInit(): void {
    this.indicatorPos = Math.floor(
      ((this.currentTemp - this.minTemp) / (this.maxTemp - this.minTemp)) * 100
    );
  }
}
