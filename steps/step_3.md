* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* **Step 3 <-**
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)

### [Step 3 setup demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-3-start)
### [Step 3 completed demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-4-start)

## Step 3

In this step, you will add Material card for each astronaut with an image and some biographical details


`app/app.module.ts` Add the `MatCardModule`

```ts
import {
  ...
  MatCardModule,
} from '@angular/material';

@NgModule({
  ...
  imports: [
    ...
    MatCardModule,
  ],
  ...
})
```

`app/app.component.ts` Add the astronauts as a property of the component class. The data is provided as part of the `AstronautService`.

```ts
import { Astronaut } from './types';
import { AstronautService } from './astronaut.service';

...
export class AppComponent {
  astronauts: Astronaut[];

  constructor(astronautService: AstronautService) {
    this.astronauts = astronautService.astronauts;
  }
}
```

`app/app.component.html` Replace the placeholder word "content" with the `mat-card`s in `mat-sidenav-content`.

```html
  <mat-sidenav-content>
    <mat-card *ngFor="let astronaut of astronauts">
      <mat-card-title>{{astronaut.name}}</mat-card-title>
      <img mat-card-image [src]="astronaut.photo">
      <mat-card-content>
        <dl>
          <dt class="mat-small">Name</dt>
          <dd class="mat-body-2">{{ astronaut.name }}</dd>
          <dt class="mat-small">Space walks</dt>
          <dd class="mat-body-2">{{ astronaut.spaceWalks }}</dd>
          <dt class="mat-small">Undergraduate major</dt>
          <dd class="mat-body-2">{{ astronaut.undergraduateMajor }}</dd>
        </dl>
      </mat-card-content>
    </mat-card>
  </mat-sidenav-content>
```

`app/app.component.css` Add some layout styles

```css
mat-sidenav-content {
  padding: 16px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 280px);
}

mat-card {
  width: 232px;
}

[mat-card-image] {
  height: 330px;
}

dl {
  display: grid;
  grid-template-columns: 2fr 3fr;
}

dd {
  margin-inline-start: 0;
}
```
