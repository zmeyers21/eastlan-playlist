import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarChartVerticalComponent } from './components/charts/bar-chart-vertical/bar-chart-vertical.component';
import { BarChartHorizontalComponent } from './components/charts/bar-chart-horizontal/bar-chart-horizontal.component';
import { BarChartHorizontalMultiComponent } from './components/charts/bar-chart-horizontal-multi/bar-chart-horizontal-multi.component';
import { BarChartVerticalMultiComponent } from './components/charts/bar-chart-vertical-multi/bar-chart-vertical-multi.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarChartVerticalComponent,
    BarChartHorizontalComponent,
    BarChartHorizontalMultiComponent,
    BarChartVerticalMultiComponent,
    LineChartComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BarChartVerticalComponent,
    BarChartHorizontalComponent,
    BarChartHorizontalMultiComponent,
    BarChartVerticalMultiComponent,
    LineChartComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
