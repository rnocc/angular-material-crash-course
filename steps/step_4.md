* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* **Step 4 <-**
* [Step 5](./step_5.md)

### [Step 4 setup demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-4-start)
### [Step 4 completed demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-5-start)

## Step 4

In this step, you will add a search box and filter options

`app/app.module.ts` Add the needed NgModules

```ts
import {
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  ...
  imports: [
    ...
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
  ],
  ...
})
```

`app/app.component.ts` Get the filters and the filter state from the astronaut service.

```ts
import { Astronaut, Filter, FilterState, Option } from './types';
...

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
```

`app/app.component.html` Replace the sidenav placeholder with the search box and filter options

```html
  <mat-sidenav mode="side" opened>
    <mat-form-field class="search">
      <input matInput placeholder="Search astronauts">
    </mat-form-field>
    <mat-divider></mat-divider>
    <ng-container *ngFor="let filter of filters; last as last">
      <mat-list>
        <h3 matSubheader>{{ filter.displayName }}</h3>

        <mat-list-item *ngFor="let val of filter.options" (click)="changeFilter(filter.category, val)">
          <button mat-button class="list-button">
            {{ val }}
          </button>
        </mat-list-item>

      </mat-list>
      <mat-divider *ngIf="!last"></mat-divider>
    </ng-container>
  </mat-sidenav>
```

`app/app.component.css` Add some layout styles

```css
  mat-sidenav {
    width: 310px;
  }

  .search {
    padding: 0 16px;
  }

  .list-button {
    width: 100%;
    text-align: left;
  }

  mat-chip.mat-chip {
    margin: 0 16px 16px;
  }

  ::ng-deep .mat-chip-list-wrapper {
    margin: 0 !important;
  }
```
