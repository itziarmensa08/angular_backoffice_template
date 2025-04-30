import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RouteInjector';

  constructor(
    private translate: TranslateService,
    private router: Router,
    public authService: AuthService
  ) {
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

  isLogin(): boolean {
    return this.router.url === '/login';
  }
}
