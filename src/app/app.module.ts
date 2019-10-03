import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CatComponent } from './cat/cat.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollObserverComponent } from './scroll-observer/scroll-observer.component';

@NgModule({
  declarations: [AppComponent, MainComponent, CatComponent, ScrollObserverComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
