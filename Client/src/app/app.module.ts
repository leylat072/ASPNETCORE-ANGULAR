import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemModule } from './items/item.module';
import { WellcomeComponent } from './wellcome.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ItemModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WellcomeComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: '**', redirectTo: 'items', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
