# Conduit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# 實作紀錄

簡單記錄自己實作的過程

## Tags: m-9

重新以目前最新版的Angular建立專案


1. `ng new conduit`
2. `ng g module shared`
3. 修改shared/shared.module.ts, import modules, export modules


## Tags: m-8

1. `ng g c shared/layout/footer --spec false --flat true` 
2. `ng g c shared/layout/header --spec false --flat true`
3. 不理解為什麼Header, Footer兩個Component不定義在SharedModule裡面？
4. `ng g module home`, 修改HomeModule.ts, 定義子路由
5. `ng g c home/home --flat true --spec false`

		
## Tags: m-7		

1. `ng g m auth`, 設定 routing
2. `ng g c auth/auth --flat true --spec false`
3. AuthComponent根據url path判斷sign in or sign up
4. FormBuilder, FormControl
5. import AuthModule
6. header.component.html 加 routerLink, routerLinkActive


## Tags: m-6 
1. `ng g service shared/services/api --spec false` 改用 HttpClient
2. `ng g service shared/services/user --spec false` 
3. `ng g class shared/models/errors.model`
4. `ng g class shared/models/user.model`
5. `ng g c shared/list-errors --flat true --spec false` 不太理解這時候這個component又定義在SharedModule?

## Tags: m-5
1. `ng g directive shared/show-authed --spec false`
2. structual directive, *showAuthed

## ReplaySubject
private isAuthenticatedSubject =new ReplaySubject<boolean>(1); 改成這樣*showAuthed 就一直不會出現可sign in的連結 ？

## Tags: m-4
1. `ng g service shared/services/jwt --spec false`
2. Update the ApiService to add authentication headers if a JWT token is present
3. We also need to add a GET function in order to retrieve a user's data (HttpClient)
4. Save JWT tokens on successful authentication, expose a purgeAuth method for logging out, and a populate() function to show authenticated user's information, 改使用 isAuthenticatedSubject = new ReplaySubject<boolean>(1), 因為在還沒認證前並不知道ture or false, 而原來建立BehaviorSubject<boolean)(false) 必須給初始值
5. Update the links to settings and profile and modify the HeaderComponent to show the user's info.
6. Call the UserService's populate method in the AppComponent's ngOnInit lifecycle method

## Tags: m-4 create a guard for the login and register pages that ensures only a user that's NOT logged in can access.
1. `ng g service auth/no-auth-guard --spec false` for the AuthModule routes
2. `ng g service shared/services/auth-guard --spec false`
3. Import AuthGuard and declare it as a provider in the AppModule
