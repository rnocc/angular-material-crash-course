import { Component } from '@angular/core';
import { Astronaut } from './types';
import { AstronautService } from './astronaut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  astronauts: Astronaut[];

  constructor(astronautService: AstronautService) {
    this.astronauts = astronautService.astronauts;
  }
}
