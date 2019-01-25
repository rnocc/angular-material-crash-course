* **Step 1 <-**
* [Step 2](./step_2.md)
* [Step 3](./step_3.md)
* [Step 4](./step_4.md)
* [Step 5](./step_5.md)

### [Full Demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/final)

### [Open this StackBlitz to get started](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-1-start)
### [Step 1 completed demo](https://stackblitz.com/github/rnocc/angular-material-workshop-stl-devfest/tree/step-2-start)

## Step 1

We have already initialized the StackBlitz instance with the packages that we will need (Angular Material, Angular CDK, hammerjs, and lodash) and added some data, a service, and some types. 

In this step, you will add Angular Material to the project.

`angular.json`
Add the prebuilt theme
```json
"styles": [
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "src/styles.css"
],
```

`src/index.html`
Add the fonts and the `mat-typography` class
```html
<head>
...
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons" rel="stylesheet">
<head>
<body>
  <app-root class="mat-typography"></app-root>
</body>
```

`src/main.ts`
Add gesture support by importing `'hammerjs'` at the top of the file
```ts
  import 'hammerjs';
```

`src/styles.css`
Add some base styling
```css
  html, body { height: 100%; }
  body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
```

`app/app.module.ts`
Add Angular Material animations

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  ...
})
```

