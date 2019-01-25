import { Component } from '@angular/core';
import { Astronaut, Filter, FilterState, Option } from './types';
import { AstronautService } from './astronaut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  astronauts: Astronaut[];
  filters: Filter[];
  filterState: FilterState;

  constructor(astronautService: AstronautService) {
    this.astronauts = astronautService.astronauts;
    this.filters = astronautService.filters;
    this.filterState = astronautService.filterState;
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }
}
