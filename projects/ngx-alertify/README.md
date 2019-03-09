# About this lib

This lib support Angular6+ only
ng-app-state is built on top of a wrapper of alertify.js.


## Install

1. npm install ngx-alertify

2. npm install alertifyjs

3. add the following style and js to angular.json file:

{
  ...
  "projects": {
    ...
      "architect": {
        "build": {
          ...
            "styles": [
              ...
              "node_modules/alertifyjs/build/css/alertify.min.css",
              "node_modules/alertifyjs/build/css/themes/bootstrap.min.css",
              "node_modules/alertifyjs/build/css/themes/semantic.min.css"
            ],
            "scripts": [
              "node_modules/alertifyjs/build/alertify.min.js"
            ]
          },
          ...
        }
      }
    }
  }
}

4.Inject service to you component where needed

export class AppComponent {
  constructor(private alertifyService: NgxAlertifyService) {
    alertifyService.success('sucess');
  }
}

5. Call the method by 
   alertifyService.success('sucess');
