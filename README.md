# AngularOne

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Setting up a new Angular project (within a existing git folder)

1. Go to the path of the folder where your git repository was installed
2. Run `ng new --directory=./`
3. When prompted for project name, type in the same name as the folder name.


## Installing bootstrap module into Angular
  1. Run `npm install --save bootstrap@latest`. This will install a new bootstrap module
  in node_modules.
  2. Open angular.json and under styles, copy the path to bootstrap.min.css.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Angular lifecycle
1. ngOnChanges
    - Called after a bound input property changes.
2. ngOnInit
    - Called once the component is initialized.
3. ngDoCheck
    - Called during every change detection runs.
4. ngAfterContentInit
    - Called after ng-content has been projected into the view.
5. ngAfterContentChecked
    - Called everytime the projected content is checked.
6. ngAfterViewInit
    - Called after the components view (child views) are initialized.
7. ngAfterViewChecked
    - Called everytime a view (child views) are checked.

## use renderer instead of directly manipulating DOM using the elementRef. This is because angular can be run in environments other than browser where DOM might not be accessible.

## add service in providers in the @Component if you want to create individual instances of the service for that perticualr component. Else below is how it is
1. at module level : single instance of the service accross the entire application (including components, directives, services)
2. at app.component level : single instance of the service for app component and all the child components (including components, directives, services).
3. at other component level : new instance of the service for every component in which service is declared in providers.

## you need to add @Injectable for the service where other service needs to get injected.