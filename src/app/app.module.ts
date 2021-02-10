import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSelectModule,
  NbActionsModule,
  NbSearchModule,
  NbUserModule,
  NbContextMenuModule, NbCardModule, NbInputModule, NbButtonModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {NbIconModule} from '@nebular/theme';
import {NbSidebarModule} from '@nebular/theme';
import {NbMenuModule} from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {MenuModule} from './menu/menu.module';
import {MenuComponent} from './menu/menu.component';
import { LayoutComponent } from './@layout/layout/layout.component';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './menu/employee/employee-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DEFAULT_THEME} from './@theme/styles/theme.default';
import {DARK_THEME} from './@theme/styles/theme.dark';
import {NbSecurityModule} from '@nebular/security';
import {NzCarouselModule} from 'ng-zorro-antd';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken} from '@nebular/auth';
import {AuthGuardService} from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
    AuthComponent
  ],
  imports: [
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8090',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          login: {
            redirect: {
              success: '/menu',
              failure: null, // stay on the same page
            },
            endpoint: '/auth/signin',
            method: 'post',
          },
          register: {
            redirect: {
              success: '/auth/login',
              failure: null, // stay on the same page
            },
            endpoint: '/registration',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        register: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        requestPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        resetPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        logout: {
          redirectDelay: 0,
        },
      },
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbSelectModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    HttpClientModule,
    MenuModule,
    CommonModule,
    EmployeeRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbMenuModule,
    NbSecurityModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NgZorroAntdModule,
    NzCarouselModule,
    CarouselModule.forRoot()
  ],

  providers: [
    NbThemeModule.forRoot(

      {

        name: 'dark',

      },

      [ DEFAULT_THEME, DARK_THEME ],

    ).providers,

    AuthGuardService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

