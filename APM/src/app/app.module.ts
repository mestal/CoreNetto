import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { CustomerModule } from './customers/customer.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomerModule,
    AppRoutingModule //It must be at last because it has wildcard routes, if any route doesnt match in upside modules, wild card routes are used
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
