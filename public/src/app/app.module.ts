import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerService } from './player.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BlueComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
