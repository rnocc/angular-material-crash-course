* [Step 1](./step_1.md)
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* **Step 5 <-**

### [Step 5 setup demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-5-start)
### [Step 5 completed demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/final)

## Step 5

In this step, you will add a search box and filter options

`app/app.module.ts` Add the needed NgModules

```ts
import {
  MatChipsModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  ...
  imports: [
    ...
    MatChipsModule,
    MatIconModule
  ],
  ...
})
```

`app\app.component.html` Add an `ng-container` around the `mat-list-item` to only show if the filter category isn't selected

```html
  <ng-container *ngIf="filterState[filter.category] === ''; else chip">
    <mat-list-item>
      ...
    </mat-list-item>
  </ng-container>
```

`app\app.component.html` Add a `mat-chip` for the selected filter option. This will go right below the `ng-container` added above.

```html
  <ng-template #chip>
    <mat-chip-list>
      <ng-container *ngFor="let val of filter.options">
        <mat-chip *ngIf="filterState[filter.category] === val" (removed)="changeFilter(filter.category, '')">
          {{val}}
          <mat-icon matChipRemove>cancel</mat-icon>
        </mat-chip>
      </ng-container>
    </mat-chip-list>
  </ng-template>
```
