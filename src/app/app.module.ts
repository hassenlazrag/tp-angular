import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ShortPipePipe } from './short-pipe.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageServersComponent,
    ShortPipePipe,
    FilterPipePipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
