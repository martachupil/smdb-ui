import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopularPageComponent } from './popular-page/popular-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NewMoviesListComponent } from './new-movies-list/new-movies-list.component';
import { TopMoviesListComponent } from './top-movies-list/top-movies-list.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { MoivesStoreTitleComponent } from './movies-store-title/moives-store-title.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopularPageComponent,
    MovieCardComponent,
    NewMoviesListComponent,
    TopMoviesListComponent,
    SignUpPageComponent,
    MoivesStoreTitleComponent,
    MovieDetailsComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
