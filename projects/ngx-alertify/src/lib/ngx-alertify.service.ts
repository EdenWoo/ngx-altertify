import {Injectable} from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class NgxAlertifyService {
  constructor() {
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

  youtubeDialog(youtubeVideoId: string, frameless?: boolean, title?: string) {
    let _youtubeVideoId = '';
    if (!youtubeVideoId) {
      _youtubeVideoId = 'GODhPuM5cEE';
    } else {
      _youtubeVideoId = youtubeVideoId;
    }

    // set title
    const _title = title ? title : '';

    alertify.YoutubeDialog || alertify.dialog('YoutubeDialog', function () {
      let iframe;
      return {
        // dialog constructor function, this will be called when the user calls alertify.YoutubeDialog(videoId)
        main: function (videoId) {
          // set the videoId setting and return current instance for chaining.
          return this.set({
            'videoId': videoId
          });
        },
        // we only want to override two options (padding and overflow).
        setup: function () {
          return {
            options: {
              // disable both padding and overflow control.
              padding: !1,
              overflow: !1,
            }
          };
        },
        // This will be called once the DOM is ready and will never be invoked again.
        // Here we create the iframe to embed the video.
        build: function () {
          // create the iframe element
          iframe = document.createElement('iframe');
          iframe.title = 'title';
          iframe.frameBorder = 'no';
          iframe.width = '100%';
          iframe.height = '100%';
          // add it to the dialog
          this.elements.content.appendChild(iframe);

          // give the dialog initial height (half the screen height).
          this.elements.body.style.minHeight = screen.height * .5 + 'px';
        },
        // dialog custom settings
        settings: {
          videoId: undefined
        },
        // listen and respond to changes in dialog settings.
        settingUpdated: function (key, oldValue, newValue) {
          switch (key) {
            case 'videoId':
              iframe.src = 'https://www.youtube.com/embed/' + newValue + '?enablejsapi=1';
              break;
          }
        },
        // listen to internal dialog events.
        hooks: {
          // triggered when the dialog is closed, this is seperate from user defined onclose
          onclose: function () {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          },
          // triggered when a dialog option gets update.
          // warning! this will not be triggered for settings updates.
          onupdate: function (option, oldValue, newValue) {
            switch (option) {
              case 'resizable':
                if (newValue) {
                  this.elements.content.removeAttribute('style');
                  iframe && iframe.removeAttribute('style');
                } else {
                  this.elements.content.style.minHeight = 'inherit';
                  iframe && (iframe.style.minHeight = 'inherit');
                }
                break;
            }
          }
        }
      };
    });

    // show the dialog
    alertify
      .YoutubeDialog(_youtubeVideoId)
      .set({frameless: frameless, title: _title});
  }


  alert(message: string, title?: string) {
    alertify.confirm(message,
      function () {
        // alertify.success('Ok');
      },
      function () {
        // alertify.error('Cancel');
      }).setHeader(title);
  }

}
