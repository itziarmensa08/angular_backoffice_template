import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GreenGuard';

  constructor(private translate: TranslateService) {
    translate.addLangs(['ca', 'es', 'en']);
    translate.setDefaultLang('es');
    
    const browserLang = this.translate.getBrowserLang();
    let lang = '';

    if (browserLang && browserLang.match(/ca|es|en/)) {
      lang = browserLang;
    } else {
      lang = 'ca';
    }
    translate.use(lang);
  }
}
