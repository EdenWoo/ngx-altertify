import {Component} from '@angular/core';
import {NgxAlertifyService} from '../../projects/ngx-alertify/src/lib/ngx-alertify.service';

declare let alertify: any;

@Component({
  selector: 'ngal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private alertifyService: NgxAlertifyService) {
  }

  success() {
    this.alertifyService.success('success message');
  }

  warning() {
    this.alertifyService.warning('warning message');
  }

  error() {
    this.alertifyService.error('error message');
  }

  message() {
    this.alertifyService.message('message message');
  }

  youtubeDialog() {
    this.alertifyService.youtubeDialog('pVbcAafEzDc', false, 'title');
  }

  alert() {
    alertify.confirm('This is a confirm dialog.',
      function () {
        alertify.success('Ok');
      },
      function () {
        alertify.error('Cancel');
      });
  }

}
