import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
