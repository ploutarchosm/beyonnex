import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TargetTemperatureComponent } from '@app/target-temperature/target-temperature.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TargetTemperatureComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
