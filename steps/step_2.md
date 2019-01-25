* [Step 1](./step_1.md)
* **Step 2 <-**
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)

### [Step 2 setup demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-2-start)
### [Step 2 completed demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-3-start)

## Step 2

In this step, you will add a toolbar and add scaffolding for the sidebar

`app/app.module.ts` Add the `MatToolbarModule` and `MatSidenavModule`

```ts
import {
  MatToolbarModule,
  MatSidenavModule,
} from '@angular/material';

@NgModule({
  ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  ...
})
```
`app/app.component.html` Replace the welcome message with the toolbar and sidenav

```html
<mat-toolbar color="primary">
  <h1>Astronaut Directory</h1>
</mat-toolbar>
<mat-sidenav-container class="page-container">
  <mat-sidenav mode="side" opened>
    sidenav
  </mat-sidenav>
  <mat-sidenav-content>
    content
  </mat-sidenav-content>
</mat-sidenav-container>
```

`app/app.component.css` Add some layout styles
```css
:host {
  height: 100vh;
  display: grid;
  grid-template: "toolbar"
                 "page-container" 1fr;
}

.main-toolbar {
  grid-area: toolbar;
  display: grid;
  grid-template:  "logo menu" auto
  / 1fr 50px;
}

.page-container {
  grid-area: page-container
}
```
