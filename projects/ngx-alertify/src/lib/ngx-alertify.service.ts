import {Injectable} from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class NgxAlertifyService {
  constructor() {
  }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function (e) {
      if (e) {
        okCallback();
      } else {
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

  errorAlert() {

// Extend existing 'alert' dialog
    if (!alertify.errorAlert) {
      // define a new errorAlert base on alert
      alertify.dialog('errorAlert', function factory() {
        return {
          build: function () {
            const errorHeader = '<span class="fa fa-times-circle fa-2x" '
              + 'style="vertical-align:middle;color:#e10000;">'
              + '</span> Application Error';
            this.setHeader(errorHeader);
          }
        };
      }, true, 'alert');
    }
// launch it.
// since this was transient, we can launch another instance at the same time.
    alertify
      .errorAlert('This is a none singleton modal error alert! <br/><br/><br/>' +
        'To show another error alert: ' +
        '<a href=\'javascript:alertify.errorAlert("Another error");\'> Click here </a>');
  }
}
