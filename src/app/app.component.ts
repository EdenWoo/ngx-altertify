import {Component} from '@angular/core';
import {NgxAlertifyService} from '../../projects/ngx-alertify/src/lib/ngx-alertify.service';

@Component({
  selector: 'ngal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private alertifyService: NgxAlertifyService) {
    alertifyService.success('sucess');
    alertifyService.errorAlert();
  }

  title = 'ngx-alertify-app';
}
